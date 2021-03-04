const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground1,ground2,hero1,rope1;
var monster;

var block1,block2,block3,block4,block5;
var block6,block7,block8block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,b22,b23,b24,b25;
var b26,b27,b29;

//part-2 of blocks
var b1,b2,bloc1,bloc2,bloc3,bloc4,bloc5,bloc6,bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9,blo1,blo2,blo3,blo4;

var bg,bgimg;
function preload() {
    bgimg=loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(50,350,1350,10);
    hero1=new Hero(600,20,100,50);
    rope1=new Rope(hero1.body,{x:40,y:50})
    monster = new Monster(950,210,100,40);

    ground2 = new Ground(950,220,250,10);

    //blocks
    //level 1
    block1 = new Block(600,20,30,30);
    block2 = new Block(550,20,30,30);
    block3 = new Block(500,20,30,30);
    block4 = new Block(450,20,30,30);
    block5 = new Block(650,20,30,30);

    //level 2
    block6 = new Block(600,40,30,30);
    block7 = new Block(550,40,30,30);
    block8 = new Block(500,40,30,30);
    block9 = new Block(450,40,30,30);
    block10 = new Block(650,40,30,30);

    //level 3
    block11 = new Block(600,60,30,30);
    block12 = new Block(550,60,30,30);
    block13 = new Block(500,60,30,30);
    block14 = new Block(450,60,30,30);
    block15 = new Block(650,60,30,30);

    //level 4
    block16 = new Block(600,80,30,30);
    block17 = new Block(550,80,30,30);
    block18 = new Block(500,80,30,30);
    block19 = new Block(450,80,30,30);
    block20 = new Block(650,80,30,30);

    //level 5
    block21 = new Block(600,100,30,30);
    b22 = new Block(550,100,30,30);
    b23 = new Block(500,100,30,30);
    b24 = new Block(450,100,30,30);
    b25 = new Block(650,100,30,30);

    //level 6
    b26 = new Block(650,120,30,30);
    b27 = new Block(550,120,30,30);
    //b28 = new Block(500,120,30,30);
    b29 = new Block(450,120,30,30);

    //blocks's height level arrangement
    b1 = new Block(650,140,30,30);
    b2 = new Block(650,140,30,30);

    blo1 = new Block(550,140,30,30);
    blo2 = new Block(550,160,30,30);
    blo3=  new Block(550,180,30,30);
    blo4 = new Block(550,200,30,30);

    bloc1 = new Block(450,140,30,30);
    bloc2 = new Block(450,160,30,30);
    bloc3 = new Block(450,180,30,30);
    bloc4 = new Block(450,200,30,30);
    bloc5 = new Block(450,210,30,30);
    bloc6 = new Block(450,220,30,30);

    bl2 = new Block(600,120,30,30);
    bl3 = new Block(600,140,30,30);
    bl4 = new Block(600,160,30,30);
    bl5 = new Block(600,180,30,30);
    bl6 = new Block(600,200,30,30);
    bl7 = new Block(600,210,30,30);
    bl8 = new Block(600,220,30,30);
    bl9 = new Block(600,240,30,30);

}

function draw(){
    background(bgimg);
    Engine.update(engine);

    
    hero1.display();
    rope1.display();
    fill("white")
    ground1.display();
    monster.display();
    ground2.display();
    //blocks
    block1.display();
    block2.display();
    block3.display();
    //level2
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    //level 3
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    //level 4
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    
    //level 5
    block21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();

    //level 6
    b26.display();
    b27.display();
    b29.display();

    //part-2
    b1.display();
    b2.display();

    blo1.display();
    blo2.display();
    blo3.display();
    blo4.display();

    bloc1.display();
    bloc2.display();
    bloc3.display();
    bloc4.display()
    bloc5.display();
    bloc6.display();

    bl2.display();
    bl3.display();
    bl4.display();
    bl5.display();
    bl6.display();
    bl7.display();
    bl8.display();
    bl9.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(hero1.body, { x: mouseX , y: mouseY });
}
