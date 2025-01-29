# workshop-task-4
FA205_Workshop_4 Here is a URL to the webpage for this project: [Link](https://jeffcai0502.github.io/workshop-task-04/)

## Task (Interactivity)
- Create an interactive p5.js sketch with at least three different kinds of user input events.
- Experiment with ways to record and redeploy inputs from the user.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Overview
- Following the instruction in the workshop
- Learn more interaction with button, check box, slider, create select, and create input
- Forking another student project and apply it to this workshop
- Applying the interactions input events and experimenting with ways to record and redeploy inputs from the users


## Workshop Notes
Following the workshop
<img width="1306" alt="截屏2025-01-29 上午10 24 29" src="https://github.com/user-attachments/assets/0c627e1d-02d7-4b45-b899-ee16a6d4322b" />
<img width="1306" alt="截屏2025-01-29 上午10 25 36" src="https://github.com/user-attachments/assets/c5c121e0-67df-4bd9-9888-4a82ee89b5e6" />

Press mouse, random image comes out
```ruby
let emojis = []
let e1, e2, e3;

function preload(){
e1 = loadImage("core.jepg");
e2 = loadImage("core1.jepg");
e3 = loadImage("core2.jepg");
}

function setup(){
  emojis.push(e1);
  emojis.push(e2);
  emojis.push(e3);
  createCanvas(400,400);
  background(220);
}

function mousePressed(){
  let r = random(emojis);
  image(r, mouseX, mouseY);
}

function draw() {

}
```

## Forking Task pratice
I started by understanding mremily9's art work in workshop 2.  It a an interative art.

<img width="400" alt="截屏2025-01-29 上午10 38 17" src="https://github.com/user-attachments/assets/fb20770c-f233-4dad-aa95-8cf9348a9a6f" />
<img width="400" alt="截屏2025-01-29 上午10 38 45" src="https://github.com/user-attachments/assets/5016203a-b125-4f3c-8dc6-26b048dedb19" />

## What i have added

New Variables:

- bgColor: Stores the background color.

- nameInput, nameButton, slider, restartButton: Elements for user interaction.


Setup Function:

- Added a slider to change the background color.
- Added an input box and button to name the artwork.
- Added a button to restart the sketch.
  
```ruby
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
```

## Notes for interactions
<img width="398" alt="截屏2025-01-30 上午12 16 45" src="https://github.com/user-attachments/assets/dd1e9df7-c2a9-41f3-a3f0-931016c7f7e6" />


Mouse Interaction:

- mousePressed(): Sets drawHearts to true, hides the text, and starts the heart animation with a slower interval (1000 milliseconds).
New Functions:

- changeBgColor(): Updates the background color based on the slider value.
  
- nameArtwork(): Displays an alert with the artwork name entered by the user.
  
- restartSketch(): Resets the sketch, stops the heart animation, and shows the text again.

