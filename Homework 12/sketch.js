//Play Area
var playBorderWidth = 600
var playBorderHeight = 600
var topWallY;
var bottomWallY;
var leftWallX;
var rightWallX;
var wallThickness = 2
var wallLength;
var wallHeight;

//Player Start
var playerX = 50
var playerY = 50
var playerSpeed = 2

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

//Exit
var exitBorder = playBorderWidth
var exitTop = 470
var exitSize = 525
var exitTextX;
var exitTextY;

function setup() {
  createCanvas(playBorderWidth, playBorderHeight);

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

  genBorders()

  genExit()

  makePlayer()

  playercontrols()

  makeBadGuys()

  genObject()

  winCon()

  findMouseLocation()
}

function makePlayer() {
//Player Character
  fill(0, 0, 255);
  circle(playerX, playerY, 15);
}

function playercontrols() {

  if(keyIsDown(w)) {
   playerY -= playerSpeed;
  }

  else if(keyIsDown(s)) {
   playerY += playerSpeed;
  }

  if(keyIsDown(a)) {
   playerX -= playerSpeed;
  }

  else if(keyIsDown(d)) {
   playerX += playerSpeed;
  }
}

function makeBadGuys() {
//Bad gyus
  fill(255, 0, 0);
  circle(enemyAX, enemyAY, 10)

  fill(200, 0, 200);
  circle(enemyBX, enemyBY, 15)
  
  badGuyMovement()
}

function badGuyMovement() {
  enemyAX += enemyASpeed
  enemyAY += enemyASpeed
  if(enemyAX >= playBorderWidth || enemyAY >= playBorderHeight) {
  enemyAX = floor(random() * 9) + 2;
  enemyAY = floor(random() * 2) + 70;
  enemyASpeed = floor(random() * 2) + 2;
  }

  enemyBX += enemyASpeed
  enemyBY += enemyBSpeed
  if(enemyBX >= playBorderWidth || enemyBY >= playBorderHeight) {
  enemyBX = floor(random() * 9) + 70;
  enemyBY = floor(random() * 2) + 2;
  enemyBSpeed = floor(random() * 2) + 2;
  }
}

function mousePressed() {
  genObsX = floor(random() * 500) + 9;
  genObsY = floor(random() * 500) + 9;
}

function genObject() {
//Generate Mouse-Click Object
  fill(200, 200, 200)
  circle(genObsX, genObsY, 20)
}

function genExit() {
//Exit Line
  line(exitBorder, exitTop, exitBorder, exitSize);
  fill(0, 200, 0)
  rect(exitBorder - wallThickness, exitTop, exitBorder, 55);
  exitTextX = exitBorder - 100;
  exitTextY = exitTop + 35;
  fill(0, 0, 0)
  text("EXIT --->", exitTextX, exitTextY);
}

function winCon() {
//Win Condition
 if(playerX > exitBorder && playerY >= exitTop && playerY <= exitSize) {
  fill(225, 0, 0);
  text("You Won..?", 250, 300);
 }
 else {
  fill(200, 200, 200);
  text("You have yet to succeed...", 175, 300);
 }
}

function findMouseLocation() {
//Mouse Location Finder
  textSize(20);
  fill(0, 0, 0);
   text("X: " + mouseX, 10, 25);
   text("Y: " + mouseY, 10, 45);
}

function genBorders() {
  topWallY = 0 + wallThickness
  bottomWallY = playBorderHeight - wallThickness
  leftWallX = 0 + wallThickness
  rightWallX = playBorderWidth - wallThickness
  wallLength = playBorderWidth - wallThickness
  wallHeight = playBorderHeight - wallThickness
  
  fill(255, 0, 0);
  //Top-Left Corner, Top Border
  rect(leftWallX, topWallY, playBorderWidth, topWallY)
  //Bottom-Left Corner, Bottom Border
  rect(leftWallX, bottomWallY, playBorderWidth, bottomWallY)
  //Top-Left Corner, Left Border
  rect(leftWallX, topWallY, leftWallX, playBorderHeight)
  //Top-Right Corner, Right Border
  rect(rightWallX, topWallY, rightWallX, playBorderHeight)
}


