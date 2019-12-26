var iceGame = function () {
    var _self = this;

    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    var Loader = Laya.Loader;
    var Stat = Laya.Stat;

    var PreResources = [
        { url: 'images/loadBox/b1.png', type: Loader.IMAGE },
        { url: 'images/loadBox/b2.png', type: Loader.IMAGE },
        { url: 'images/loadBox/t1.png', type: Loader.IMAGE },
        { url: 'images/loadBox/t2.png', type: Loader.IMAGE },
        { url: 'images/loadBox/t3.png', type: Loader.IMAGE },
        { url: 'res/atlas/images/public.atlas', type: Loader.ATLAS },
        { url: 'res/atlas/images/loadBox.atlas', type: Loader.ATLAS }
    ];
    var Resources = [
        { url: 'images/gameBox/q.png', type: Loader.IMAGE },
        { url: 'images/indexBox/t1.png', type: Loader.IMAGE },
        { url: 'images/indexBox/t2.png', type: Loader.IMAGE },
        { url: 'images/indexBox/t3.png', type: Loader.IMAGE },
        { url: 'res/atlas/images/gameBox.atlas', type: Loader.ATLAS },
        { url: 'res/atlas/images/indexBox.atlas', type: Loader.ATLAS }
    ];

    var LoadComplete = null, ShowRankBox = null, ShowGameBox = null, GameEnd = null;
    var loadAflag = false, loadBflag = false;

    var loadBoxUi, indexBoxUi, gameBoxUi, endDialogUi, ruleDialogUi;
    var GamePageY = 0;

    var ball = {}, arrow = {};
    var AnimionTimer = false;
    var eventFlag = false;
    var obstacles = {};
    var squares = {};
    var score = 0;


    _self.init = function (opts) {
        _layaInit();
        LoadComplete = opts.load;
        ShowRankBox = opts.showRank;
        ShowGameBox = opts.showGame;
        GameEnd = opts.end;
    }

    /**
     * 设置加载进度
     */
    _self.setLoadBar = function (per) {
        var pct = per / 100;
        var pos = loadBoxUi.pos;
        var bar = loadBoxUi.bar;

        pos.x = (646 - 54) * pct + 54;
        bar.width = 609 * pct;
    }

    /**
     * 显示首页
     */
    _self.showIndexBox = function () {
        _UItransition(loadBoxUi, indexBoxUi);
        loadBoxUi.loadW.clear();
        loadBoxUi.ice.clear();
        indexBoxUi.ice.play();
    }

    /**
     * laya初始化
     */
    function _layaInit() {
        Config.isAlpha = true;
        Laya.init(750, 1634, WebGL);
        Laya.stage.scaleMode = "fixedwidth";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "center";
        Laya.UIConfig.closeDialogOnSide = false;
        Laya.loader.load(PreResources, laya.utils.Handler.create(this, _loadUIInit), null);
        Laya.stage.bgColor = "none";
    }

    /**
     * 事件初始化
     */
    function _eventInit() {
        indexBoxUi.beginBtn.on(Laya.Event.CLICK, this, _showGameBox);
        indexBoxUi.rankBtn.on(Laya.Event.CLICK, this, _showRankBox);

        gameBoxUi.arR.on(Laya.Event.CLICK, this, _rotateArrow, ["right"]);
        gameBoxUi.arL.on(Laya.Event.CLICK, this, _rotateArrow, ["left"]);

        endDialogUi.againBtn.on(Laya.Event.CLICK, this, _resetGame);
        endDialogUi.rankBtn.on(Laya.Event.CLICK, this, _showRankBox);

        ruleDialogUi.closeBtn.on(Laya.Event.CLICK, this, _closeRuleDialog);
    }

    /**
     * 模拟加载进度
     */
    function _load_timer(per) {
        per = per || 0;
        per += imath.randomRange(1, 3);
        per = per > 99 ? 99 : per;
        _self.setLoadBar(per);
        if (per == 99) {
            loadBflag = true;
            if (loadAflag && loadBflag && LoadComplete) {
                _self.setLoadBar(100);
                LoadComplete();
            }
        }
        else {
            setTimeout(function () {
                _load_timer(per);
            }, 33);
        }
    }//edn func

    /**
     * 游戏开始
     */
    function _gameStart() {
        AnimionTimer = true;
        eventFlag = true;
        _ArrowRotating();
        _ballSpeedCount();
    }

    /**
     * 游戏结束
     */
    function _gameEnd() {
        AnimionTimer = false;
        eventFlag = false;
        endDialogUi.scoreD.text = score;
        endDialogUi.score.text = score;
        endDialogUi.popup();
        if (GameEnd) GameEnd(score);
    }

    /**
     * 重置游戏
     */
    function _resetGame() {
        score = 0;
        ball.ui.x = 260;
        ball.ui.y = 870;
        ball.Xspeed = 0;
        ball.Yspeed = 0;
        endDialogUi.close();
        _squaresUIInit();
        _gameStart();
    }

    /**
     * 关闭规则页面
     */
    function _closeRuleDialog(){
        ruleDialogUi.close();
        _gameStart();
    }

    /**
     * 旋转控制物
     * @param {*} dir 
     */
    function _rotateArrow(dir) {
        if ((arrow.speed == 1 || arrow.speed == -1 || arrow.speed == 0) && eventFlag) {
            if (dir == "left") {
                arrow.speed = 3;
                gameBoxUi.arL.alpha = 1;
                setTimeout(function () {
                    gameBoxUi.arL.alpha = 0.5;
                }, 300);
            }
            else {
                arrow.speed = -3;
                gameBoxUi.arR.alpha = 1;
                setTimeout(function () {
                    gameBoxUi.arR.alpha = 0.5;
                }, 300);
            }
        }
    }//end func

    /**
     * 控制物的旋转
     */
    function _ArrowRotating() {
        if (arrow.ui.rotation > arrow.rotationLimit) {
            arrow.speed = -1;
        }
        else if (arrow.ui.rotation < -arrow.rotationLimit) {
            arrow.speed = 1;
        }

        if (arrow.ui.rotation == 0 && (arrow.speed == 1 || arrow.speed == -1)) {
            arrow.speed = 0;
        }
        else {
            arrow.ui.rotation += arrow.speed;
        }
        requestAnimationFrame(function () {
            if (eventFlag) _ArrowRotating();
        });
    }

    /**
     * 球速度的计算
     */
    function _ballSpeedCount() {
        _HorizontalSpeedBall();
        _VerticalSpeedBall();
        _ballAllHitTest();
        requestAnimationFrame(function () {
            if (AnimionTimer) _ballSpeedCount();
        });
    }//end func

    /**
     * 显示游戏页面
     */
    function _showGameBox() {
        _UItransition(indexBoxUi, gameBoxUi);
        indexBoxUi.ice.clear();
        gameBoxUi.ice.play();
        ruleDialogUi.popup();
        if (ShowGameBox) ShowGameBox();
    }

    /**
     * 水平速度计算
     */
    function _HorizontalSpeedBall() {
        var Force = ball.Xforce;
        ball.Xspeed = gamemath.FloatPointAdd(ball.Xspeed, gamemath.Acceleration(Force, 0.0167));
        ball.ui.x += ball.Xspeed
        ball.Xforce = 0;
    }//end func

    /**
     * 垂直速度计算
     */
    function _VerticalSpeedBall() {
        var Force = gamemath.FloatPointAdd(ball.Yforce, gamemath.gravity);
        ball.Yspeed = gamemath.FloatPointAdd(ball.Yspeed, gamemath.Acceleration(Force, 0.0167));
        ball.ui.y += ball.Yspeed
        ball.Yforce = 0;
    }//end func

    /**
     * 球的全部碰撞检测计算
     */
    function _ballAllHitTest() {
        var OutTest = _ballOutTest();
        if (!OutTest) {
            var hit = _ballThingHitTest(arrow, true);
            if (hit) return;
            for (var i in obstacles) {
                var hit = _ballThingHitTest(obstacles[i], false);
                if (hit) return;
            }
            for (var i in squares) {
                if (squares[i].ui.visible) {
                    var hit = _ballThingHitTest(squares[i], false);
                    if (hit) return;
                }
            }
        }
        else _gameEnd();
    }//end func

    /**
     * 球的越界检测
     */
    function _ballOutTest() {
        var bool = false;
        if (ball.ui.y > 990 + GamePageY + 50) bool = true;
        return bool;
    }//end func

    /**
     * 球与物体的碰撞检测
     * @param {*}  
     * @param {*}  
     */
    function _ballThingHitTest(thing, extForce) {
        var res = gamemath.ballHitTest(thing.ui, ball.ui);
        if (res.hit) {
            AnimionTimer = false;
            _CountForce(thing, res, extForce);
            // if(res.surface == 0 || res.surface == 2) ball.Yspeed -= 2;
            // else if(res.surface == 1 || res.surface == 3) ball.Xspeed -= 2;
            ball.Yspeed = 0;
            ball.Xspeed = 0;
            _addScore(thing);
            _reduceHitTimes(thing);

            requestAnimationFrame(function () {
                AnimionTimer = true;
                _ballSpeedCount();
            });
            return true;
        }
        return false;
    }//end func

    /**
     * 减少碰撞次数
     * @param {*} thing 
     */
    function _reduceHitTimes(thing) {
        if (thing.hasOwnProperty("hitTimes")) {
            thing.hitTimes--;
            thing.ui.alpha = thing.hitTimes / thing.level;
            if (thing.hitTimes == 0) {
                thing.ui.visible = false;
            }
        }
    }//end func

    /**
     * 增加分数
     * @param {*} thing 
     */
    function _addScore(thing) {
        if (thing.hasOwnProperty("score")) {
            score += thing.score;
        }
    }//end func

    /**
     * 计算力
     * @param {*} ele 
     * @param {*} res 
     * @param {*} ext 
     */
    function _CountForce(ele, res, ext) {
        var counterforce = _Counterforce(ele, res);
        var extForce = { x: 0, y: 0 }; //外力

        if (ele.hasOwnProperty('extForce')) extForce = ele.extForce;
        if (ext) extForce = _CounterExtForce(res);
        ball.Xforce = counterforce.Xforce + extForce.x;
        ball.Yforce = counterforce.Yforce + extForce.y;
    }//end func

    /**
     * 计算外力
     * @param {*} res 
     */
    function _CounterExtForce(res) {
        var force = {
            x: 0,
            y: 0
        };

        if (arrow.speed > 2 || arrow.speed < -2) {
            var deg = gamemath.convertAngle(arrow.ui.rotation);
            var iforce = arrow.speed * 3000 * (ball.ui.x - arrow.ui.x) / (arrow.ui.width / 2);	//力

            if (res.surface == 0) {
                iforce = iforce < 0 ? iforce : 0;
                iforce -= 3000;
                force.x = -iforce * Math.sin(deg);
                force.y = iforce * Math.cos(deg);
            }
            else if (res.surface == 2) {
                iforce = -iforce;
                iforce = iforce > 0 ? iforce : 0;
                iforce += 3000;
                force.x = -iforce * Math.sin(deg);
                force.y = iforce * Math.cos(deg);
            }
        }
        return force;
    }//end func

    /**
     * 反作用力
     * @param {*} ele 
     * @param {*} res 
     */
    function _Counterforce(ele, res) {
        var force = {
            Xforce: 0,
            Yforce: 0
        };

        var rotateDir = ele.ui.rotation > 0 ? 1 : -1;											//旋转方向
        var rotation = Math.abs(ele.ui.rotation); 												//不带方向的旋转角度
        var deg = gamemath.convertAngle(rotation);													//不带方向的旋转弧度
        var sinDeg = Math.sin(deg);																//正弦
        var cosDeg = Math.cos(deg);																//余弦
        var XdirF = ball.Xspeed * ball.quality * ele.elasticity / 0.0167;						//X方向所产生的反作用力
        var YdirF = ball.Yspeed * ball.quality * ele.elasticity / 0.0167 - gamemath.gravity;		//Y方向所产生的反作用力
        var XdpsF = {																			//X方向的实际反作用力（坐标系为物体旋转后的坐标系）
            force: 0,																			//力
            xdir: 0,																			//x方向
            ydir: 0,																			//y方向
        };
        var YdpsF = {																			//Y方向的实际反作用力（坐标系为物体旋转后的坐标系）
            force: 0,
            xdir: 0,
            ydir: 0
        };

        if (rotateDir == 1 && (res.surface == 0 || res.surface == 2)) {
            XdpsF.force = XdirF * sinDeg;
            XdpsF.xdir = -1 * sinDeg;
            XdpsF.ydir = 1 * cosDeg;
            YdpsF.force = YdirF * cosDeg;
            YdpsF.xdir = 1 * sinDeg;
            YdpsF.ydir = -1 * cosDeg;
        }
        else if (rotateDir == 1 && (res.surface == 1 || res.surface == 3)) {
            XdpsF.force = XdirF * cosDeg;
            XdpsF.xdir = 1 * cosDeg;
            XdpsF.ydir = 1 * sinDeg;
            YdpsF.force = YdirF * sinDeg;
            YdpsF.xdir = -1 * cosDeg;
            YdpsF.ydir = -1 * sinDeg;
        }
        else if (rotateDir == -1 && (res.surface == 0 || res.surface == 2)) {
            XdpsF.force = XdirF * sinDeg;
            XdpsF.xdir = -1 * sinDeg;
            XdpsF.ydir = -1 * cosDeg;
            YdpsF.force = YdirF * cosDeg;
            YdpsF.xdir = -1 * sinDeg;
            YdpsF.ydir = -1 * cosDeg;
        }
        else if (rotateDir == -1 && (res.surface == 1 || res.surface == 3)) {
            XdpsF.force = XdirF * cosDeg;
            XdpsF.xdir = -1 * cosDeg;
            XdpsF.ydir = 1 * sinDeg;
            YdpsF.force = YdirF * sinDeg;
            YdpsF.xdir = 1 * cosDeg;
            YdpsF.ydir = -1 * sinDeg;
        }

        force.Xforce = gamemath.FloatPointAdd(XdpsF.xdir * XdpsF.force, YdpsF.xdir * YdpsF.force);
        force.Yforce = gamemath.FloatPointAdd(XdpsF.ydir * XdpsF.force, YdpsF.ydir * YdpsF.force);

        return force;
    }//end func

    /**
     * 显示排行榜页面
     */
    function _showRankBox() {
        if (ShowRankBox) ShowRankBox();
    }

    /**
     * load页面UI初始化
     */
    function _loadUIInit() {
        loadBoxUi = new loadBoxUI();
        Laya.stage.addChild(loadBoxUi);
        _UIScreenAuto(loadBoxUi);
        loadBoxUi.loadW.play();
        loadBoxUi.ice.play();
        _load_timer(0);
        var mask = new Laya.Sprite();
        mask.graphics.drawRect(5,0,609,26,"#000000");
        loadBoxUi.barBox.mask = mask;
        Laya.loader.load(Resources, laya.utils.Handler.create(this, _loadComplete), null);
    }

    /**
     * 加载完成
     */
    function _loadComplete() {
        _indexUiInit();
        _gameUiInit();
        _endUiInit();
        _ruleUiInit();
        _eventInit();
        loadAflag = true;
        if (loadAflag && loadBflag && LoadComplete) {
            _self.setLoadBar(100);
            LoadComplete();
        }
    }

    /**
     * 首页UI初始化
     */
    function _indexUiInit() {
        indexBoxUi = new indexBoxUI();
        Laya.stage.addChild(indexBoxUi);
        _UIScreenAuto(indexBoxUi);
    }

    /**
     * 游戏页面UI初始化
     */
    function _gameUiInit() {
        gameBoxUi = new gameBoxUI();
        Laya.stage.addChild(gameBoxUi);
        _UIScreenAuto(gameBoxUi);
        GamePageY = ((750 / Browser.clientWidth) * Browser.clientHeight - gameBoxUi.cont.height) / 2
        _ballUIInit();
        _arrowUIInit();
        _squaresUIInit();
        _obstaclesUIInit();
    }

    /**
     * 球初始化
     */
    function _ballUIInit() {
        ball.ui = gameBoxUi.ball;
        ball.quality = 10;					//球的质量
        ball.Xspeed = 0;					//球水平方向的速度
        ball.Yspeed = 0;					//球垂直方向的速度
        ball.Xforce = 0;					//球水平方向的受力状况
        ball.Yforce = 0;					//球垂直方向的受力状况
    }

    /**
     * 箭头初始化
     */
    function _arrowUIInit() {
        arrow.ui = gameBoxUi.bar;
        arrow.elasticity = 0.6;				//控制物的弹力系数  建议值 0 - 1  1时无动能损失
        arrow.speed = 0;
        arrow.rotationLimit = 25;
    }

    /**
     * 方块初始化
     */
    function _squaresUIInit() {
        if (squares.hasOwnProperty("block0")) {
            for (var i in squares) {
                var item = squares[i];
                item.hitTimes = item.ui.name == "block" ? 1 : 3;
                item.ui.visible = true;
                item.ui.alpha = 1;
            }
        }
        else {
            for (var i = 0; i < gameBoxUi.blocks._childs.length; i++) {
                if (gameBoxUi.blocks._childs[i].name == "block" || gameBoxUi.blocks._childs[i].name == "beer") {
                    var item = {};
                    item.ui = gameBoxUi.blocks._childs[i];
                    item.elasticity = 0.7;
                    item.score = item.ui.name == "block" ? 1 : 2;
                    item.hitTimes = item.ui.name == "block" ? 1 : 3;
                    item.level = item.ui.name == "block" ? 1 : 3;
                    item.id = "block" + i;
                    item.ui.visible = true;
                    item.ui.alpha = 1;
                    squares["block" + i] = item;
                }
            }
        }
    }

    /**
     * 障碍物初始化
     */
    function _obstaclesUIInit() {
        for (var i = 0; i < gameBoxUi.blocks._childs.length; i++) {
            if (gameBoxUi.blocks._childs[i].name != "block" && gameBoxUi.blocks._childs[i].name != "beer") {
                var item = {};
                item.ui = gameBoxUi.blocks._childs[i];
                switch (item.ui.name) {
                    case 'sideL':
                        item.extForce = { x: 7000, y: 0 };
                        item.score = 1;

                        break;
                    case 'sideR':
                        item.extForce = { x: -7000, y: 0 };
                        item.score = 1;
                        break;
                    case 'side':
                        item.extForce = { x: 0, y: 0 };
                        item.score = 1;
                    default:
                        item.extForce = { x: 0, y: 0 };
                        item.score = 3;
                        break;
                }
                item.elasticity = 1;
                item.id = "obs" + i;
                obstacles["obs" + i] = item;
            }
        }
    }

    /**
     * 结束页面UI初始化
     */
    function _endUiInit() {
        endDialogUi = new endDialogUI();
    }

    /**
     * 规则页面UI初始化
     */
    function _ruleUiInit() {
        ruleDialogUi = new ruleDialogUI();
    }

    /**
     * 屏幕适配
     */
    function _UIScreenAuto(ui) {
        var cont = ui.cont;
        var h = cont.height;
        cont.y = ((750 / Browser.clientWidth) * Browser.clientHeight - h) / 2;
    }

    /**
     * 页面过渡
     */
    function _UItransition(UIa, UIb, callback) {
        Laya.Tween.to(UIa, {
            alpha: 0
        }, 500);

        UIb.visible = true;
        Laya.Tween.to(UIb, {
            alpha: 1
        }, 500);

        setTimeout(function () {
            UIa.visible = false;
            if (callback) callback();
        }, 500)
    }

}