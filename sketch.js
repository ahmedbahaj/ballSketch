var ballRadius = 15;
const ballsX = 90;
var shine = false;
var rectangle = {speed: 0.3, width: 375, length: 250};
var balls = {redBall: {x: ballsX, y: 145, speed: 5.00, color: [255, 0, 0]},
              orangeBall: {x: ballsX, y: 180, speed: 4.50, color: [220, 118, 51]},
              yellowBall: {x: ballsX, y: 215, speed: 4.00, color: [244, 208, 63]},
              limeBall: {x: ballsX, y: 250, speed: 3.50, color: [81, 255, 51]},
              blueBall: {x: ballsX, y: 285, speed: 3.00, color: [0, 0, 255]},
              darkpurpleBall: {x: ballsX, y: 320, speed: 2.50, color: [150, 51, 255]},
              purpleBall: {x: ballsX, y: 355, speed: 2, color: [222, 51, 255]}};

function setup() {
  createCanvas(500, 500);
  saveGif('mySketch', 10);
}

function draw() {
  background(0);
  
  // Draw rectangle
  noFill();
  if(shine){
    stroke(255);
    shine = false;
  }else {
    stroke(100);
  }
  strokeWeight(5)
  rectMode(CENTER);
  rect(width / 2, height / 2, rectangle.width, rectangle.length);

  // Rectangle animation
  rectangle.width -= rectangle.speed;
  if (rectangle.width < 0) {
    rectangle.width = 0;
  }

  // Draw balls
  ellipseMode(CENTER);
  noStroke();
  
  for(let key in balls){
    var ball = balls[key];
    fill(ball.color);
    ellipse(ball.x, ball.y, ballRadius * 2);
    ball.x += ball.speed

    if(collisionDetector(ball.x, rectangle.width, ballRadius)){
      ball.speed *= -1;
      ball.x += ball.speed;
      shine = true;
    }
  }
}

function collisionDetector(xofBall, widthRect, radius) {
  var halfRectangle = widthRect / 2;
  if (xofBall + radius > (width / 2 + halfRectangle)) {
    console.log("collision");
    return true;
  } else if (xofBall - radius < (width / 2 - halfRectangle)) {
    console.log("collision");
    return true;
  }
  return false;
}
