var canvas;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var ball, edges;
var music;

function preload()
{
    music = loadSound("music.mp3")
}


function setup()
{
    canvas = createCanvas(800,600);
    canvas.shapeColor = "black";

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(705,580,190,30);
    block4.shapeColor = "green";

    block5 = createSprite(20,465,30,190);
    block5.shapeColor = "rgb(230,0,115)";

    block6 = createSprite(20,270,30,180);
    block6.shapeColor = "rgb(0,230,0)";

    block7 = createSprite(20,85,30,180);
    block7.shapeColor = "rgb(64,0,77)";

    block8 = createSprite(780,85,30,180);
    block8.shapeColor = "rgb(25,255,255)";

    block9 = createSprite(780,275,30,180);
    block9.shapeColor = "orange";

    block10 = createSprite(780,465,30,190);
    block10.shapeColor = "rgb(77,0,13)";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 8
    ball.velocityY = -9

}

function draw() {
    background(rgb(0,0,0));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        //write code to set velocityX and velocityY of ball as 0
        music.play();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
    if(block5.isTouching(ball) && ball.bounceOff(block5)){
        ball.shapeColor = "rgb(230,0,115)";
        music.stop();
    }
    if(block6.isTouching(ball) && ball.bounceOff(block6)){
        ball.shapeColor = "rgb(0,230,0)";
        music.stop();
    }
    if(block7.isTouching(ball) && ball.bounceOff(block7)){
        ball.shapeColor = "rgb(64,0,77)";
        music.stop();
    }
    if(block8.isTouching(ball) && ball.bounceOff(block8)){
        ball.shapeColor = "rgb(25,255,255)";
        music.stop();
    }
    if(block9.isTouching(ball) && ball.bounceOff(block9)){
        ball.shapeColor = "orange";
        music.stop();
    }
    if(block10.isTouching(ball) && ball.bounceOff(block10)){
        ball.shapeColor = "rgb(77,0,13)";
        music.stop();
    }

    drawSprites();
}
