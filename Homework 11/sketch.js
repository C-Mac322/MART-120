//Player Start
var playerX = 50
var playerY = 50

//Key Codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//Generated Object (Mouse-Click Object)
var genObsX;
var genObsY;

//Enemies
var enemyAX;
var enemyAY;
var enemyBX;
var enemyBY;
var enemyASpeed;
var enemyBSpeed;

function setup() {
  createCanvas(600, 600);

//Enemy Speeds and Starts
  enemyASpeed = floor(random() * 2) + 2;
  enemyBSpeed = floor(random() * 2) + 2;
  enemyAX = floor(random() * 9) + 2;
  enemyAY = floor(random() * 2) + 70;
  enemyBX = floor(random() * 9) + 70;
  enemyBY = floor(random() * 2) + 2;

//Random Object Location
  genObsX = -10
  genObsY = -10

}

function draw() {
  background(220);

//Win Condition
 if(playerX > 600 && playerY >= 470 && playerY <= 525) {
  fill(225, 0, 0);
  text("You Won..?", 250, 300);
 }
 else {
  fill(200, 200, 200);
  text("You have yet to succeed...", 175, 300);
 }

//Mouse Location Finder
  textSize(20);
  fill(0, 0, 0);
   text("X: " + mouseX, 10, 25);
   text("Y: " + mouseY, 10, 45);

//Exit Line
  line(600, 470, 600, 525);
  text("EXIT --->", 500, 500);

//Player Character
  fill(0, 0, 255);
  circle(playerX, playerY, 15);
//Player Movement
  playercontrols()

//Bad gyus
  fill(255, 0, 0);
  circle(enemyAX, enemyAY, 10)
  enemyAX += enemyASpeed
  enemyAY += enemyASpeed
  if(enemyAX >= 600 || enemyAY >= 600) {
  enemyAX = floor(random() * 9) + 2;
  enemyAY = floor(random() * 2) + 70;
  enemyASpeed = floor(random() * 2) + 2;
  }

  fill(200, 0, 200);
  circle(enemyBX, enemyBY, 15)
  enemyBX += enemyASpeed
  enemyBY += enemyBSpeed
  if(enemyBX >= 600 || enemyBY >= 600) {
  enemyBX = floor(random() * 9) + 70;
  enemyBY = floor(random() * 2) + 2;
  enemyBSpeed = floor(random() * 2) + 2;
  }

//Generate Mouse-Click Object
  fill(200, 200, 200)
  circle(genObsX, genObsY, 20)

}

function playercontrols() {

  if(keyIsDown(w)) {
   playerY -= 2;
  }

  else if(keyIsDown(s)) {
   playerY += 2;
  }

  if(keyIsDown(a)) {
   playerX -= 2;
  }

  else if(keyIsDown(d)) {
   playerX += 2;
  }
}

function mousePressed() {
  genObsX = floor(random() * 500) + 9;
  genObsY = floor(random() * 500) + 9;
}