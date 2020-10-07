function setup() {
  song = loadSound("badang.mp3", loaded);
  createCanvas(1050, 700);
  
  //scene1
  img = loadImage("hole.jpeg", loaded);
  xPos = width/2;
  yPos = height/2;
}


function loaded() {
  song.play();
  image(img, 0, 0, width, height);
}


function draw() {
  frameRate(10);
  noStroke();
  fill(255, 200);
  ellipse(xPos, yPos, 5, 5);
  
  move();
  boundFix();
  
}
function move(){
  //확률적으로 동서남북을 결정하게 하기
  // move
  tmp = random(1);
  
  // 동일하게 25%의 확률로 동서남북 방향을 결정. 
  if(tmp < 0.25){
    xPos = xPos + 5;
  } else if (tmp < 0.5){
    xPos = xPos - 5;
  } else if (tmp < 0.75){
    yPos = yPos + 5;
  } else {
    yPos = yPos - 5;
  }
}

function boundFix(){
  //화면 밖에 위치할 경우, 반대편에서 그려지게 하자
  if(xPos < 0)      { xPos = width + xPos; }
  if(xPos > width)  { xPos = xPos - width;}
  if(yPos < 0)      { yPos = height + yPos;}
  if(yPos > height) { yPos = yPos - height; }
}
