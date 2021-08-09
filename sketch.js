var p;
function setup() {
  createCanvas(400,400);
p=createSprite (100,100,30,30);
}


console.log ("I like pink");

function draw() 
{
  background("pink");
  if(keyDown(LEFT_ARROW)){
p.position.x=p.position.x-5;

  }

  if(keyDown(RIGHT_ARROW)){
 p.position.x=p.position.x+5;
  }
drawSprites();
}




