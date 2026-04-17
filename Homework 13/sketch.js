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
var enemyX = [];
var enemyY = [];
var enemyXStart = [];
var enemyYStart = [];
var enemyDiameter = [];
var enemyXSpeed = [];
var enemyYSpeed = [];
var enemyR = [];
var enemyG = [];
var enemyB = [];
var enemySize;
var enemyRed;
var enemyGreen;
var enemyBlue;

//Exit
var exitBorder = playBorderWidth
var exitTop = 470
var exitSize = 525
var exitTextX;
var exitTextY;

function setup() {
  createCanvas(playBorderWidth, playBorderHeight);

//Enemy Array
  for(var i = 0; i < 5; i++) {
  enemyXStart[i] = floor(random() * 99) + 70;
  enemyYStart[i] = floor(random() * 99) + 70;
  enemySize = floor(random() * 15) + 5;
  enemyRed = floor(random() * 60) + 15;
  enemyGreen = floor(random() * 60) + 15;
  enemyBlue = floor(random() * 60) + 15;
  enemyX[i] = enemyXStart[i];
  enemyY[i] = enemyYStart[i];
  enemyDiameter[i] = enemySize
  }

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
  for(var i = 0; i < enemyX.length; i++) {
  enemyR[i] = i * enemyRed
  enemyG[i] = i * enemyGreen
  enemyB[i] = i * enemyBlue
  fill(enemyR[i], enemyG[i], enemyB[i]);
  circle(enemyX[i], enemyY[i], enemyDiameter[i]);
  }
  
  badGuyMovement()
}

function badGuyMovement() {
  for(var i = 0; i < enemyX.length; i++) {
  enemyXSpeed = floor(random() * 2) + 2;
  enemyYSpeed = floor(random() * 2) + 2;
  enemyXStart[i] = floor(random() * 99) + 70;
  enemyYStart[i] = floor(random() * 99) + 70;
  enemyX[i] += enemyXSpeed
  enemyY[i] += enemyYSpeed
   if(enemyX[i] >= playBorderWidth || enemyY[i] >= playBorderHeight) {
   enemyX[i] = enemyXStart[i]
   enemyY[i] = enemyYStart[i]
   }
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


