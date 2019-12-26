var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var endDialogUI=(function(_super){
		function endDialogUI(){
			
		    this.tips=null;
		    this.rankBtn=null;
		    this.againBtn=null;
		    this.scoreD=null;
		    this.score=null;

			endDialogUI.__super.call(this);
		}

		CLASS$(endDialogUI,'ui.endDialogUI',_super);
		var __proto__=endDialogUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(endDialogUI.uiView);

		}

		endDialogUI.uiView={"type":"Dialog","props":{"width":673,"height":1076},"child":[{"type":"Image","props":{"y":0,"x":3,"var":"tips","skin":"images/endDialog/bg.png"}},{"type":"Sprite","props":{"y":887,"x":131,"width":425,"var":"rankBtn","height":120}},{"type":"Sprite","props":{"y":724,"x":132,"width":423,"var":"againBtn","height":122}},{"type":"Text","props":{"y":580,"x":-5,"width":673,"var":"scoreD","text":"0","strokeColor":"#ff0000","stroke":2,"skewX":-6,"height":120,"fontSize":120,"font":"Microsoft YaHei","color":"#000000","bold":true,"align":"center"}},{"type":"Text","props":{"y":583,"x":0,"width":673,"var":"score","text":"0","skewX":-6,"height":120,"fontSize":120,"font":"Microsoft YaHei","color":"#ff0000","bold":true,"align":"center"}}]};
		return endDialogUI;
	})(Dialog);
var gameBoxUI=(function(_super){
		function gameBoxUI(){
			
		    this.ice=null;
		    this.beerAni1=null;
		    this.beerAni2=null;
		    this.cont=null;
		    this.ball=null;
		    this.bar=null;
		    this.blocks=null;
		    this.arR=null;
		    this.arL=null;

			gameBoxUI.__super.call(this);
		}

		CLASS$(gameBoxUI,'ui.gameBoxUI',_super);
		var __proto__=gameBoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameBoxUI.uiView);

		}

		gameBoxUI.uiView={"type":"View","props":{"width":750,"visible":false,"height":1634,"alpha":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"cont","height":990},"child":[{"type":"Image","props":{"y":-80,"x":0,"skin":"images/gameBox/q.png","alpha":1},"compId":9},{"type":"Image","props":{"y":172,"x":216,"skin":"images/gameBox/k.png"}},{"type":"Image","props":{"y":870,"x":260,"width":32,"var":"ball","skin":"images/gameBox/ball.png","pivotY":16,"pivotX":16,"height":32}},{"type":"Sprite","props":{"y":960,"x":375,"width":324,"var":"bar","pivotY":7,"pivotX":162,"height":14},"child":[{"type":"Image","props":{"y":7,"x":162,"skin":"images/gameBox/c.png","pivotY":21,"pivotX":175}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"blocks","height":990},"child":[{"type":"Sprite","props":{"y":46,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":46,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":46,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":46,"x":409,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":46,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":46,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":116,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":116,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":116,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":115,"x":408,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":116,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":116,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":357,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":357,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":357,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":356,"x":408,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":357,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":357,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":447,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":447,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":447,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":446,"x":408,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":447,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":447,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":527,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":526,"x":368,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":527,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":607,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":606,"x":368,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":607,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":687,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":686,"x":368,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":687,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":767,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":767,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":767,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":766,"x":408,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":767,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":767,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"images/gameBox/b.png"}}]},{"type":"Sprite","props":{"y":609,"x":278,"width":58,"pivotY":115,"pivotX":29,"name":"beer1","height":230},"compId":261,"child":[{"type":"Image","props":{"y":0,"x":0,"width":58,"skin":"images/gameBox/beer.png","height":231}}]},{"type":"Sprite","props":{"y":609,"x":466,"width":58,"pivotY":115,"pivotX":29,"name":"beer2","height":230},"compId":260,"child":[{"type":"Image","props":{"y":0,"x":0,"width":58,"skin":"images/gameBox/beer.png","height":231}}]},{"type":"Sprite","props":{"y":263,"x":396,"width":110,"rotation":11,"pivotY":1,"pivotX":55,"name":"logo","height":2}},{"type":"Sprite","props":{"y":261,"x":287,"width":110,"rotation":-9,"pivotY":1,"pivotX":55,"name":"logo","height":2}},{"type":"Sprite","props":{"y":203,"x":322,"width":76,"rotation":21,"pivotY":1,"pivotX":38,"name":"logo","height":2}},{"type":"Sprite","props":{"y":202,"x":433,"width":150,"rotation":-11,"pivotY":1,"pivotX":75,"name":"logo","height":2}},{"type":"Sprite","props":{"y":231,"x":478,"width":100,"rotation":-57,"pivotY":1,"pivotX":50,"name":"logo","height":2}},{"type":"Sprite","props":{"y":229,"x":260,"width":90,"rotation":-57,"pivotY":1,"pivotX":45,"name":"logo","height":2}},{"type":"Sprite","props":{"y":1,"x":376,"width":750,"pivotY":1,"pivotX":375,"name":"side","height":2}},{"type":"Sprite","props":{"y":250,"x":1,"width":2,"pivotY":700,"pivotX":1,"name":"sideL","height":1400}},{"type":"Sprite","props":{"y":250,"x":749,"width":2,"pivotY":700,"pivotX":1,"name":"sideR","height":1400}}]},{"type":"Image","props":{"y":830,"x":720,"width":109,"var":"arR","skin":"images/gameBox/arR.png","pivotX":109,"height":93,"alpha":0.5}},{"type":"Image","props":{"y":830,"x":30,"width":109,"var":"arL","skin":"images/gameBox/arL.png","height":93,"alpha":0.5}}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":20},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":40}]}}],"name":"ice","id":1,"frameRate":24,"action":0},{"nodes":[{"target":261,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":261,"key":"rotation","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":261,"key":"rotation","index":2},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":261,"key":"rotation","index":6},{"value":5,"tweenMethod":"linearNone","tween":true,"target":261,"key":"rotation","index":10},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":261,"key":"rotation","index":14},{"value":0,"tweenMethod":"linearNone","tween":true,"target":261,"key":"rotation","index":16}],"name":[{"value":"beer","tweenMethod":"linearNone","tween":false,"target":261,"key":"name","index":0}]}}],"name":"beerAni1","id":2,"frameRate":24,"action":0},{"nodes":[{"target":260,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":260,"key":"rotation","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":260,"key":"rotation","index":2},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":260,"key":"rotation","index":6},{"value":5,"tweenMethod":"linearNone","tween":true,"target":260,"key":"rotation","index":10},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":260,"key":"rotation","index":14},{"value":0,"tweenMethod":"linearNone","tween":true,"target":260,"key":"rotation","index":16}]}}],"name":"beerAni2","id":3,"frameRate":24,"action":0}]};
		return gameBoxUI;
	})(View);
var indexBoxUI=(function(_super){
		function indexBoxUI(){
			
		    this.ice=null;
		    this.cont=null;
		    this.beginBtn=null;
		    this.rankBtn=null;

			indexBoxUI.__super.call(this);
		}

		CLASS$(indexBoxUI,'ui.indexBoxUI',_super);
		var __proto__=indexBoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(indexBoxUI.uiView);

		}

		indexBoxUI.uiView={"type":"View","props":{"width":750,"visible":false,"height":1634,"alpha":0},"child":[{"type":"Image","props":{"y":33,"x":240,"skin":"images/public/logo.png","name":"logo"}},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":800},"child":[{"type":"Image","props":{"y":137,"x":375,"skin":"images/indexBox/t1.png","scaleY":1.045,"scaleX":1.045,"pivotY":287,"pivotX":373,"alpha":0.45},"compId":4},{"type":"Image","props":{"y":-150,"x":2,"skin":"images/indexBox/t2.png"}},{"type":"Image","props":{"y":-150,"x":2,"skin":"images/indexBox/t3.png","alpha":0.45},"compId":6},{"type":"Image","props":{"y":510,"x":159,"var":"beginBtn","skin":"images/indexBox/b1.png"}},{"type":"Image","props":{"y":670,"x":159,"var":"rankBtn","skin":"images/indexBox/b2.png"}}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":40}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":40}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40}]}}],"name":"ice","id":1,"frameRate":24,"action":0}]};
		return indexBoxUI;
	})(View);
var loadBoxUI=(function(_super){
		function loadBoxUI(){
			
		    this.loadW=null;
		    this.ice=null;
		    this.cont=null;
		    this.pos=null;
		    this.barBox=null;
		    this.bar=null;
		    this.light=null;
		    this.t1=null;
		    this.t2=null;
		    this.t3=null;

			loadBoxUI.__super.call(this);
		}

		CLASS$(loadBoxUI,'ui.loadBoxUI',_super);
		var __proto__=loadBoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadBoxUI.uiView);

		}

		loadBoxUI.uiView={"type":"View","props":{"width":750,"height":1634},"child":[{"type":"Image","props":{"y":33,"x":240,"skin":"images/public/logo.png","name":"logo"}},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":930},"child":[{"type":"Image","props":{"y":652,"x":54,"var":"pos","skin":"images/loadBox/b.png"}},{"type":"Sprite","props":{"y":800,"x":70,"width":609,"var":"barBox","height":26},"child":[{"type":"Image","props":{"y":0,"x":0,"width":0,"var":"bar","skin":"images/loadBox/b1.png"}}]},{"type":"Image","props":{"y":800,"x":70,"var":"light","skin":"images/loadBox/b2.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"t1","skin":"images/loadBox/t3.png","alpha":0},"compId":8},{"type":"Image","props":{"var":"t2","skin":"images/loadBox/t2.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"t3","skin":"images/loadBox/t1.png","alpha":0},"compId":6},{"type":"Image","props":{"y":840,"x":275,"skin":"images/loadBox/w.png","name":"word"},"compId":9}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":10},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":20}]}}],"name":"loadW","id":1,"frameRate":24,"action":0},{"nodes":[{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":40}]}},{"target":6,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":40}]}}],"name":"ice","id":2,"frameRate":24,"action":0}]};
		return loadBoxUI;
	})(View);
var ruleDialogUI=(function(_super){
		function ruleDialogUI(){
			
		    this.closeBtn=null;

			ruleDialogUI.__super.call(this);
		}

		CLASS$(ruleDialogUI,'ui.ruleDialogUI',_super);
		var __proto__=ruleDialogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ruleDialogUI.uiView);

		}

		ruleDialogUI.uiView={"type":"Dialog","props":{"width":673,"height":1074},"child":[{"type":"Image","props":{"skin":"images/gameBox/rule.png"}},{"type":"Sprite","props":{"y":849,"x":118,"width":445,"var":"closeBtn","height":139}}]};
		return ruleDialogUI;
	})(Dialog);