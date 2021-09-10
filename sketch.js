var gameState="Play";
var mowglibanana;
var mowgli,mogImage;
var bgImage,bg;
var tiger,tigerImage;
var ground;
var banana,bananaImage;
var bananatree,bananatreeImg;
var rock,rockImage;
var logImage;
var banatreegrp ,bananagrp, rockgrp;
var mowglijump;
var lifeline=0;
var fire,fireImage;
function preload(){

  mogImage = loadAnimation("mp4.png","mp5.png","mp6.png","mp7.png","mp8.png","mp9.png");
  bgImage = loadImage("imagejungle.jpg");
  tigerImage = loadAnimation("tiger-0.png","tiger-1.png","tiger-2.png","tiger-3.png","tiger-4.png","tiger-5.png","tiger-6.png","tiger-7.png");
  bananaImage= loadImage("banana1.png");
  bananatreeImg = loadImage("banana_tree.png");
  rockImage= loadImage("rock.png");
  logImage=loadImage("tree.png");
  mowglibanana=loadAnimation("0001.png","0002.png");
  mowglijump=loadAnimation("mowglijump2.png");
  fireImage= loadImage("fire.png")

}




function setup() {
  createCanvas(850,480);

  
  bg= createSprite(700,200,500,600)
  bg.addImage(bgImage);
  bg.scale=5;
  bg.velocityX=-4

  ground=createSprite(-100,405,2000,10);
  ground.visible=false;
   tiger =createSprite(0,360, 30, 30);
  tiger.addAnimation("tiger",tigerImage);
  tiger.scale= 0.7
  mowgli=createSprite(350,350,600,10);
  mowgli.addAnimation("run",mogImage);
  mowgli.addAnimation("jump",mowglijump);
  mowgli.addAnimation("banana",mowglibanana);
  mowgli.scale=0.7
  

  //tiger.debug=true;
  //mowgli.debug=true;

  mowgli.setCollider("rectangle",-50,0,mowgli.width-250,mowgli.height-200)
  tiger.setCollider("rectangle",-50,0,tiger.width-250,tiger.height-200)

 bananagrp=new Group();
  rockgrp=new Group();
  bananatreegrp= new Group();


}

function draw() {
  background(0);
  
  if (gameState=="Play"){


    if(frameCount==10000){

      fire=createSprite(800,360,30,30);
      fire.addImage("fire",fireImage);
      fire.scale=0.5;
      fire.velocityX=-3;
      fire.lifetime=300;

    }

    
    if(bg.x<100){

      bg.x=bg.width/2;
     
       }
       
       if (bananagrp.isTouching(mowgli)){

        
        mowgli.changeAnimation("banana",mowglibanana);
        lifeline=lifeline+1;
        bananagrp.destroyEach();
       //mowgli.y=235;

       }
       else if( keyDown("space")){

        mowgli.velocityY=-3;
        tiger.velocityY=-3;
        mowgli.changeAnimation("jump",mowglijump);
        mowgli.scale=1;
        

       }
       else{

      
       mowgli.changeAnimation("run",mogImage)
       mowgli.scale=0.7

       }
       mowgli.velocityY=mowgli.velocityY+0.8;
       tiger.velocityY=tiger.velocityY+0.8;

     
      spawnObstacles();
     
     
     if(mowgli.isTouching(rockgrp)){
  

        lifeline=lifeline-1;
        rockgrp.destroyEach();

            

      }




  }

 else if( gameState="End"){

 bananatreegrp.setVelocityXEach(0);
 banatreegrp.setLifetimeEach(-1);
 mowgli.visible=false;
 //change amination of tiger 
 

 }
  
tiger.collide(ground);
mowgli.collide(ground);

  drawSprites();
  textSize(20);
  fill("black")
  text("Lifeline:"+lifeline,20,20)
  
}


function spawnObstacles(){

if(frameCount % 800 == 0)

{
  bananatree= createSprite(900,205);
  bananatree.addImage(bananatreeImg);
  bananatree.scale=1.9;
  bananatree.velocityX=-3;
  bananatree.lifetime=300;
  mowgli.depth= bananatree.depth;
  mowgli.depth=mowgli.depth+1;
 bananatreegrp.add(bananatree);

banana = createSprite(890,235);
banana.addImage(bananaImage);
banana.scale=0.3
banana.velocityX=-3
banana.lifetime=300
bananagrp.add(banana);
}

if(frameCount % 249 == 0)
{
 rock= createSprite(900,425);
 rock.velocityX=-4

var rand = Math.round(random(0,1))
switch(rand)
{

case 0:
rock.addImage("banana",rockImage);
rock.scale=0.5
break;


case 1:
rock.addImage("run",logImage);
rock.scale=0.3;

break;


}
rock.lifetime=230;
rockgrp.add(rock);

}


}