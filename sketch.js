const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1,plane1;
var iron1,rubber1,stone1;


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,height,1200,20)
    hammer1 = new Hammer(10,100);
    iron1 = new Iron(400,50,20,10);
    rubber1 = new Rubber(1000,50,10);
    stone1 = new Stone(800,50,20,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    hammer1.display();
    iron1.display();
    stone1.display();
    rubber1.display();

}