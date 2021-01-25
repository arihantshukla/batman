var player,playerAnimation

function preload(){
    playerAnimation=loadAnimation("walking_1.png","walking_2.png","walking_3.png",
    "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
   createCanvas(400,400)
    player=createSprite(200,200,20,20)
    player.addAnimation(playerAnimation)
}

function draw(){
    drawSprites()
}   

