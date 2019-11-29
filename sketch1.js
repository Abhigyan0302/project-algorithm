var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
fixedrect=createSprite(200,100,10,50);
fixedrect.shapeColor="red";
fixedrect.velocityY=2;

movingrect=createSprite(200,400,10,50); 
movingrect.shapeColor="blue";
movingrect.velocityY=-2;
}
function draw(){
background("yellow");
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
movingrect.velocityX=movingrect.velocityX*(-1);
fixedrect.velocityX=fixedrect.velocityX*(-1);
    }
    if( movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
        movingrect.velocityY=movingrect.velocityY*(-1);
        fixedrect.velocityY=fixedrect.velocityY*(-1);  

  }

drawSprites();
}

