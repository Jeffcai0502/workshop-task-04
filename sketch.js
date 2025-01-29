let counter = 0; 
let countInterval;
let bgColor = 255;
let nameInput, nameButton, slider, restartButton;
let drawHearts = false;
let showTextFlag = true;

function setup() {
  createCanvas(400, 400);
  background(bgColor);
  showText();
  cat(width/2, height/2, 100);
  setTimeout(cat, 2000, width/2, height/2, 100);
  
  textSize(20);
  textFont("TIMES NEW ROMAN");
  text("Change the background color",10,740,2000);
  textAlign(LEFT);   
  
  // Slider to change background color
  slider = createSlider(0, 255, 255);
  slider.position(10, height + 10);
  slider.input(changeBgColor);

  
  // Input box to name the artwork
  nameInput = createInput();
  nameInput.position(10, height + 40);
  nameButton = createButton('Name the Artwork');
  nameButton.position(nameInput.x + nameInput.width + 10, height + 40);
  nameButton.mousePressed(nameArtwork);
  
  // Button to restart the sketch
  restartButton = createButton('Restart');
  restartButton.position(10, height + 70);
  restartButton.mousePressed(restartSketch);
}

function draw() {
  background(bgColor);
  if (showTextFlag) {
    showText();
  }
  cat(width/2, height/2, 100);
  
  if (mouseX < width/2 + 50 && mouseY < width/2 + 50 && mouseX > width/2 - 50 && mouseY > width/2 - 50) {
    cursor('grab');
  } else {
    cursor(ARROW);
  }
  
  if (drawHearts) {
    heart();
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
  text('Pat the cat', width/2, height/2);
}

function heart(){
  let x = random(0, width);
  let y = random(0, height);
  let size = random(20, 40);
  
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
    drawHearts = true;
    showTextFlag = false;
    counter = 0;
    countInterval = setInterval(heart, 1000); // Slower interval for hearts
  }
}

function changeBgColor() {
  bgColor = slider.value();
}

function nameArtwork() {
  let name = nameInput.value();
  alert('You named the artwork: ' + name);
}

function restartSketch() {
  counter = 0;
  drawHearts = false;
  showTextFlag = true;
  clearInterval(countInterval);
  setup();
}