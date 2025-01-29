# workshop-task-4
FA205_Workshop_4 Here is a URL to the webpage for this project: [Link]()

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

