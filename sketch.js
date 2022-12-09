//namespacing
const Engine = Matter.Engine; //mecanica fisica
const World = Matter.World; //mundo fisico
const Bodies = Matter.Bodies; //objetos
const Body = Matter.Body; //modificar os objetos

var engine, world;
var chao;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  //opcoes do chao
  var chao_options = {
    isStatic: true,
  };

  //crio o corpo fisico/objeto
  chao = Bodies.rectangle(200, 390, 400, 20, chao_options);
  //adiciono ao mundo
  World.add(world, chao);

  console.log(chao);
}

function draw() {
  background("black");

  fill("blue");

  //centralizar o rect
  rectMode(CENTER);
  //desenha o retangulo nas posicoes do corpo fisico
  rect(chao.position.x, chao.position.y, 400, 20);

  Engine.update(engine);
}

// var let const
