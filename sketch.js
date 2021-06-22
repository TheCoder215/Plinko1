const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground,d1,d2,d3,d4,d5,d6;
var particles=[];

function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,595,400,10);
  d1 = new Division(5,510,10,160);
  d2 = new Division(83,510,10,160);
  d3 = new Division(161,510,10,160);
  d4 = new Division(239,510,10,160);
  d5 = new Division(317,510,10,160);
  d6 = new Division(390,510,10,160);
 
  p1 = new Plinko(1,40,5);
  p2 = new Plinko(26,40,5);
  p3 = new Plinko(51,40,5);
  p4 = new Plinko(76,40,5);
  p5 = new Plinko(101,40,5);
  p6 = new Plinko(126,40,5);
  p7 = new Plinko(151,40,5);
  p8 = new Plinko(176,40,5);
  p9 = new Plinko(201,40,5);
  p10 = new Plinko(226,40,5);
  p11 = new Plinko(251,40,5);
  p12 = new Plinko(276,40,5);
  p13 = new Plinko(301,40,5);
  p14 = new Plinko(326,40,5);
  p15 = new Plinko(351,40,5);
  p16 = new Plinko(376,40,5);
  p17 = new Plinko(400,40,5);

  s1 = new Plinko(40,112.5,5)
  s2 = new Plinko(65,112.5,5)
  s3 = new Plinko(90,112.5,5)
  s4 = new Plinko(115,112.5,5)
  s5 = new Plinko(140,112.5,5)
  s6 = new Plinko(165,112.5,5)
  s7 = new Plinko(190,112.5,5)
  s8 = new Plinko(215,112.5,5)
  s9 = new Plinko(240,112.5,5)
  s10 = new Plinko(265,112.5,5)
  s11 = new Plinko(290,112.5,5)
  s12 = new Plinko(315,112.5,5)
  s13 = new Plinko(340,112.5,5)
  s14 = new Plinko(365,112.5,5)
  s15 = new Plinko(390,112.5,5)

  m1 = new Plinko(1,185,5);
  m2 = new Plinko(26,185,5);
  m3 = new Plinko(51,185,5);
  m4 = new Plinko(76,185,5);
  m5 = new Plinko(101,185,5);
  m6 = new Plinko(126,185,5);
  m7 = new Plinko(151,185,5);
  m8 = new Plinko(176,185,5);
  m9 = new Plinko(201,185,5);
  m10 = new Plinko(226,185,5);
  m11 = new Plinko(251,185,5);
  m12 = new Plinko(276,185,5);
  m13 = new Plinko(301,185,5);
  m14 = new Plinko(326,185,5);
  m15 = new Plinko(351,185,5);
  m16 = new Plinko(376,185,5);
  m17 = new Plinko(400,185,5);

  n1 = new Plinko(40,257.5,5)
  n2 = new Plinko(65,257.5,5)
  n3 = new Plinko(90,257.5,5)
  n4 = new Plinko(115,257.5,5)
  n5 = new Plinko(140,257.5,5)
  n6 = new Plinko(165,257.5,5)
  n7 = new Plinko(190,257.5,5)
  n8 = new Plinko(215,257.5,5)
  n9 = new Plinko(240,257.5,5)
  n10 = new Plinko(265,257.5,5)
  n11 = new Plinko(290,257.5,5)
  n12 = new Plinko(315,257.5,5)
  n13 = new Plinko(340,257.5,5)
  n14 = new Plinko(365,257.5,5)
  n15 = new Plinko(390,257.5,5)

  o1 = new Plinko(1,330,5);
  o2 = new Plinko(26,330,5);
  o3 = new Plinko(51,330,5);
  o4 = new Plinko(76,330,5);
  o5 = new Plinko(101,330,5);
  o6 = new Plinko(126,330,5);
  o7 = new Plinko(151,330,5);
  o8 = new Plinko(176,330,5);
  o9 = new Plinko(201,330,5);
  o10 = new Plinko(226,330,5);
  o11 = new Plinko(251,330,5);
  o12 = new Plinko(276,330,5);
  o13 = new Plinko(301,330,5);
  o14 = new Plinko(326,330,5);
  o15 = new Plinko(351,330,5);
  o16 = new Plinko(376,330,5);
  o17 = new Plinko(400,330,5);

  e1 = new Plinko(40,402.5,5)
  e2 = new Plinko(65,402.5,5)
  e3 = new Plinko(90,402.5,5)
  e4 = new Plinko(115,402.5,5)
  e5 = new Plinko(140,402.5,5)
  e6 = new Plinko(165,402.5,5)
  e7 = new Plinko(190,402.5,5)
  e8 = new Plinko(215,402.5,5)
  e9 = new Plinko(240,402.5,5)
  e10 = new Plinko(265,402.5,5)
  e11 = new Plinko(290,402.5,5)
  e12 = new Plinko(315,402.5,5)
  e13 = new Plinko(340,402.5,5)
  e14 = new Plinko(365,402.5,5)
  e15 = new Plinko(390,402.5,5)

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  if(frameCount%30===0){
    particles.push(new Particle(random(width/2 -200,width/2 +200),10,5))
  }


  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display(); 
  
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
//m
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  m13.display();
  m14.display();
  m15.display();
  m16.display();
  m17.display();
//o
  o1.display();
  o2.display();
  o3.display();
  o4.display();
  o5.display();
  o6.display();
  o7.display();
  o8.display();
  o9.display();
  o10.display();
  o11.display();
  o12.display();
  o13.display();
  o14.display();
  o15.display();
  o16.display();
  o17.display();

  //s
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  s11.display();
  s12.display();
  s13.display();
  s14.display();
  s15.display();
  //n
  n1.display();
  n2.display();
  n3.display();
  n4.display();
  n5.display();
  n6.display();
  n7.display();
  n8.display();
  n9.display();
  n10.display();
  n11.display();
  n12.display();
  n13.display();
  n14.display();
  n15.display();
  //e
  e1.display();
  e2.display();
  e3.display();
  e4.display();
  e5.display();
  e6.display();
  e7.display();
  e8.display();
  e9.display();
  e10.display();
  e11.display();
  e12.display();
  e13.display();
  e14.display();
  e15.display();

  drawSprites();

 //not working particle.display();
}