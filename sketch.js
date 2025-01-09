let counter = 0; 
let countInterval;


function setup() {
  createCanvas(400, 400);
  background(255);
  showText();
  setTimeout(background, 2000, 255);
  setTimeout(cat, 2000, width/2, height/2, 100);
}

function draw() {
  if (mouseX < width/2 + 50 && mouseY < width/2 + 50 && mouseX > width/2 - 50 && mouseY > width/2 - 50) {
    cursor('grab');
  }else{
    cursor(ARROW);
  }
}

function showText(){
  textStyle(BOLD);
  textFont('Courier New');
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, CENTER);
  text('pat the cat', width/2, height/2);
}

function heart(){
  x = random(0, width);
  y = random(0, height);
  size = random(20, 40);
  
  noStroke();
  
  fill(255, 161, 153);
  
  circle(x-(size/4), y, size/2);
  circle(x+(size/4), y, size/2);
  triangle(x, y+size/1.5, x+(size/2), y+2, x-(size/2), y+2);

  counter++;
  if (counter > 5){
    clearInterval(countInterval);
    counter = 0;
  }
}

function cat(x, y, size){
  noStroke();
  fill(0);
  circle(x, y, size);
  triangle(x-size/2, y-size/1.5, x+(size/2), y+2, x-(size/2), y+2);
  triangle(x+size/2, y-size/1.5, x+(size/2), y+2, x-(size/2), y+2);
  fill(255);
  circle(x+size/4, y, size/4);
  circle(x-size/4, y, size/4);
  fill(0);
  circle(x+size/4, y, size/6);
  circle(x-size/4, y, size/6);
}

function mousePressed(){
  if ((mouseX < width/2 + 50 && mouseY < width/2 + 50 && mouseX > width/2 - 50 && mouseY > width/2 - 50)){
    countInterval = setInterval(heart, 2000);
  }
}
