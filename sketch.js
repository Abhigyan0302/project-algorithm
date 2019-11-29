var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
fixedrect=createSprite(200,200,10,50);
fixedrect.shapeColor="red";
movingrect=createSprite(300,100,10,50); 
movingrect.shapeColor="blue";
}
function draw() {
  background("black");  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor="green","yellow";
      fixedrect.shapeColor="neon","white";


  }
  else{
    fixedrect.shapeColor="red"; 
    movingrect.shapeColor="blue";
  }
  drawSprites();
}