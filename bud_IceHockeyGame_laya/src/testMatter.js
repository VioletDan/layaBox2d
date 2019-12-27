var imporTestMatter = function () {
    var _that = this
    _that.init = function () {
        // 简写
        var Engine = Matter.Engine,//引擎
            Render = Matter.Render, //渲染器
            World = Matter.World, //世界
            Bodies = Matter.Bodies,//刚体
            Composites = Matter.Composites, //复合体
            Body = Matter.Body,
            Constraint = Matter.Constraint, //约束
            MouseConstraint = Matter.MouseConstraint,
            Common = Matter.Common,
            Events = Matter.Events;


        // 创建引擎
        var engine = Engine.create();

        // 创建渲染器
        var render = Render.create({
            element: document.body,
            engine: engine,
            options: {
                wireframes: false
            }
        });
        //球体
        var stack = Composites.stack(20, 20, 6, 4, 0, 0, function (x, y) {
            if (Common.random() > 0.35) {
                return Bodies.rectangle(x, y, 64, 64, {
                    render: {
                        stroke: "#000",
                        sprite: {
                            texture: "https://jdc.jd.com/demo/matterjs/img/box.png"
                        }
                    }
                });
            } else {
                return Bodies.circle(x, y, 46, {
                    desity: 0.0005, //密度
                    frictionAir: 0.06, //空气摩擦力
                    friction: 0.01, //摩擦力
                    render: {
                        sprite: {
                            texture: "https://jdc.jd.com/demo/matterjs/img/ball.png"
                        }
                    }
                });
            }
        });

        // 软体
        var group = Body.nextGroup(true),
            particleOptions = {
                friction: 0.00001,
                collisionFilter: {
                    group: group
                },
                render: {
                    visible: false
                }
            },
            cloth = Composites.softBody(200, 150, 20, 12, 5, 5, false, 8, particleOptions);
        for (var i = 0; i < 20; i++) {
            cloth.bodies[i].isStatic = true;
        }
        // 创建牛顿摆球
        var newtonsCradle = Composites.newtonsCradle(300, 320, 5, 25, 150);
        // 创建一个矩形和圆形
        var rect = Bodies.rectangle(400, 100, 50, 50, { isStatic: true }),
            ball = Bodies.circle(400, 400, 50);
        // 墙壁
        var offset = 5;
        World.add(engine.world, [
            Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
            Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
            Bodies.rectangle(200, 100, 50, 50),
            rect,
            ball,
            Constraint.create({
                bodyA: rect,
                pointA: {
                    x: 0,
                    y: 0
                },
                bodyB: ball,
                pointB: {
                    x: 0,
                    y: -50
                },
                render: {
                    lineWidth: 0,
                    strokeStyle: "red"
                },
                stiffness: 0.6
            })
            // newtonsCradle,
            // cloth,
            // Bodies.circle(300, 450, 80, { isStatic: true }),
            // Bodies.rectangle(500, 430, 80, 80, { isStatic: true })
            // stack
        ]);

        // 鼠标约束
        var mouseConstraint = MouseConstraint.create(engine, {
            element: render.canvas
        });

        World.add(engine.world, mouseConstraint);

        // 运行引擎
        Engine.run(engine);
        Render.run(render);

    }
}
var TestMatter = new imporTestMatter()