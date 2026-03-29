var noseYTop = 280
var noseYBottom = 320
var noseYPoint = 320
var pupilX = 227
var neckXRight = 275
var neckXLeft = 75
var chestYTop = 125
var chestYBottom = 475
var hairXTop = 211
var hairYTop = 157
var hairXFront = 211
var hairYFront = 226
var hairXMid = 319
var hairYMid = 175

var size = 1;
var count = 0;
var sizeGrow = 3;

function setup() {
  createCanvas(600, 600);
  noseMoveY = floor(random() * 2) + 1;
  pupilMoveX = floor(random() * 2) + 1;
  chestMoveY = floor(random() * 2) + 1;
  neckMoveX = floor(random() * 2) + 1;
  hairMoveX = floor(random() * 2) + 1;
  hairMoveY = floor(random() * 2) + 1;
}

function draw() {
  background(220);
  rect(neckXRight, 400, neckXLeft, 125);
  rect(225, chestYBottom, 175, chestYTop);
  triangle(250, 475, 360, 425, 360, 475);
  circle(312, 300, 250);
  triangle(175, noseYPoint, 188, noseYTop, 190, noseYBottom);
  ellipse(250, 280, 60, 30);
  circle(pupilX, 280, 15);
  line(201, 357, 220, 357);
  point(225, 357);
  triangle(262, 179, 382, 161, 397, 209);
  triangle(hairXTop, hairYTop, hairXFront, hairYFront, hairXMid, hairYMid);
  line(210, 373, 243, 370);
  line(243, 370, 227, 351);
  line(227, 351, 198, 351);
  line(194, 341, 230, 344);
  line(230, 344, 276, 358);
  line(276, 358, 260, 414);
 
  textSize(size);
  size+= sizeGrow;
  count++;
  if(count > 5) {
        sizeGrow *=-1;
        count = 0;
    }
    text("Caleb McDonald - In Shapes", 10, 580);
  
  if (noseYBottom >= 330 || noseYBottom <= 300) {
    noseMoveY *= -1;
  }
  
  if (pupilX >= 270 || pupilX <= 226) {
    pupilMoveX *= -1;
  }
  
  if (chestYBottom >= 480 || chestYBottom <= 470) {
    chestMoveY *= -1;
  }
  
  if (neckXRight >= 280 || neckXRight <= 250) {
    neckMoveX *= -1;
  }
  
  if (hairXTop >= 220 || hairXTop <= 200) {
    hairMoveX *= -1;
    hairMoveY *= -1;
  }

  noseYBottom += noseMoveY;
  noseYTop += noseMoveY;
  noseYPoint += noseMoveY;
  pupilX += pupilMoveX
  chestYTop += chestMoveY;
  chestYBottom += chestMoveY;
  neckXRight += neckMoveX;
  neckXLeft += neckMoveX;
  hairXTop += hairMoveX
  hairYTop += hairMoveY
  hairXFront += hairMoveX
  hairYFront += hairMoveY
  hairXMid +=  hairMoveX
  hairYMid += hairMoveY
}
