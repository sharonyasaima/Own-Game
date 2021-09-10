var beanstalk,beanstalkImage;
var jack,jackImage,jackclimbImg;
var bg,bgImage;
var leaf1,leafImg1;
var thorns1,thornImage1;
var gameMode1="Intro";
var leaf2,leafImg2;
var thorns2,thornImage2;
function preload(){

bgImage=loadImage("sky.jpg")
beanstalkImage=loadImage("beanstalk1.png");
jackclimbImg=loadAnimation("climb-0.png","climb-1.png","climb-0.png","climb-2.png","climb-3.png","climb-4.png","climb-5.png","climb-6.png","climb-7.png","climb-8.png","climb-9.png","climb-10.png")

leafImg1=loadImage("leave.png");
thornImage1=loadImage("thorn1.png");
leafImg2=loadImage("leave1.png");
thornImage2=loadImage("thorn.png");

}

function setup(){

    createCanvas(400,400);


    bg = createSprite(200,200);
    bg.addImage("background",bgImage)
    bg.scale=3;

beanstalk=createSprite(200,200);
beanstalk.addImage("beanstalk",beanstalkImage)
beanstalk.scale=1;
beanstalk.velocityY=3;


jack=createSprite(100,200);
jack.addAnimation("climb",jackclimbImg);
jack.scale=0.5;

jack.debug=true;


}

function draw(){
//if(gameMode1=="Play"){
    jack.x=World.mouseX;
    jack.y=World.mouseY;

    if(beanstalk.y>400){

    beanstalk.y=beanstalk.height/4;

    }
    beanstalk.velocityY=3;

    spawnLeaf1();
    spawnThorn1();
    spawnLeaf2();
    spawnThorn2();
//}
drawSprites();


}

function spawnLeaf1(){

    if(frameCount%100==0){
    
        leaf1=createSprite(210,20);
        leaf1.addImage("leaf1",leafImg1)
        leaf1.velocityY=3
        leaf1.scale=0.5;
        leaf1.lifetime=200;
    
    
    }
    
    
    }
    function spawnThorn1(){
        if(frameCount%350==0){
    thorns1=createSprite(130,-50,10,51);
    //thorns.shapeColor="blue";
    thorns1.addImage("thorn1",thornImage1);
    thorns1.scale=0.5;
    thorns1.velocityY=3;
    thorns1.lifetime=200;
        }
    }

    function spawnLeaf2(){

        if(frameCount%125==0){
        
            leaf2=createSprite(130,20);
            leaf2.addImage("leaf2",leafImg2)
            leaf2.velocityY=3
            leaf2.scale=0.5;
            leaf2.lifetime=200;
        
        
        }
        
        
        }
        function spawnThorn2(){
            if(frameCount%250==0){
        thorns2=createSprite(200,-50,10,51);
        //thorns.shapeColor="blue";
        thorns2.addImage("thorn2",thornImage2);
        thorns2.scale=0.5;
        thorns2.velocityY=3;
        thorns2.lifetime=200;
            }
        }