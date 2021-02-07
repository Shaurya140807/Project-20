var garden, gardenimage
var cat
var cat1image,cat2image,cat3image
var mouse
var mouseimage1,mouseimage2,mouseimage3

function preload() {
    //load the images here
    gardenimage = loadImage("images/garden.png")
cat1image = loadImage("images/cat1.png")
cat2image = loadAnimation("images/cat2.png","images/cat3.png")
cat3image = loadImage("images/cat4.png")

mouseimage1 = loadImage("images/mouse1.png")
mouseimage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseimage3 = loadImage("images/mouse4.png")
 
}

function setup(){
    createCanvas(1000,800); 
    //create tom and jerry sprites here
    //garden = createSprite(500,400,1000,800);
    //garden.addImage(gardenimage)
    cat = createSprite(870,600);
    cat.addImage(cat1image);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addImage(mouseimage1);
    mouse.scale = 0.1;

}   

function draw() {

    background(gardenimage);
    
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("catlastimage",cat3image)
       cat.x = 300;
       cat.scale = 0.2;
       cat.changeAnimation("catlastimage")
       mouse.addAnimation("mouselastimage",mouseimage3)
       mouse.scale = 0.15;
       mouse.changeAnimation("mouselastimage")
   }

    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("catRunning", cat2image);
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseteasing",mouseimage2)
mouse.frameDelay = 25;
mouse.changeAnimation("mouseteasing")
}

}
