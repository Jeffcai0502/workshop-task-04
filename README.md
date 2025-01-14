# FA205_Workshop_2

Website link: https://mremily9.github.io/workshop-task-2/


# Overview
- Learnt how to use an IDLE that is running locally rather than using the in-web editor
- Used VSCode with new extensions to make it easier to make p5.js projects
- Learnt how to get a live preview of my sketch as I work on it in the IDLE
- Created a new project experimenting with setTimeout() and setInterval()
- Experimented with cursors look and with the mouseIsPressed boolean, looking into interaction
- New experiments with text and playing with fonts
- Learnt how to implement my p5.js projects into GitHub and use GitHub pages to deploy my projects as such so that they are visible on the web

  
# Notes
Notes on setting up VSCode and the steps needed to create a new project

![image](https://github.com/user-attachments/assets/8bb40297-d29f-439a-b712-353f800fa0ad)

Notes on new coding concepts introduced 

![image](https://github.com/user-attachments/assets/d5eff2a2-0816-4732-94bb-b800d44c6860)

How to set up GitHub pages 

![image](https://github.com/user-attachments/assets/b780e6b5-1e99-4539-bad8-03f3fe1f6f27)


Comments while watching the workshop video. 



# Problem Solving/Code
- I had wanted to look into creating an interactive piece similar to that of a cookie clicker, where after the user presses on something, something else emits. This being hearts which emit at a delayed frequency with the use of the setInterval() function
  

**Creating Assets/Experimenting**
I started off looking into playing around with text, being a new item from the documentation to experiment with. 

![image](https://github.com/user-attachments/assets/f5bf99ec-3f08-441b-ab74-b7716989f22f)


Then after, making a heart shape, experimenting making shapes with two circle() and one triangle() to make the heart. 

![image](https://github.com/user-attachments/assets/c70eae9d-9d32-4b05-bed9-27ec8560fe3e)

Again playing around with making shapes, I went to make a cat. This cat being something that the user can interact with by petting it. 

![image](https://github.com/user-attachments/assets/985e4d52-9adb-47af-897f-1b312fe060db)

**Interaction**

I then looked into cursors, as a clear method of showcasing that something can be interacted with the user. 
Using a conditional, it looks for if the users mouse is within an area over the cat, if so it shows a grab arrow - which looks like a hand ready to pet the cat!

![image](https://github.com/user-attachments/assets/b0f1f2ab-746e-489c-9042-db04c919c013)

**setTimeout()**

I wanted the instructions for the text 'pet the cat' to be shown first, and then the cat and interactions can happen afterward. To do this, I used setTimeout() 

![image](https://github.com/user-attachments/assets/77122db7-e4c5-40ee-833a-4dc80bc62546)

**setInterval()**

I then added hearts to appear around the cat after petting, looking into setInterval() and clearInterval() after it had be counted after 5 hearts were drawn. The hearts appear in random order around the canvas due to the start of the heart function adding random x and y values for the hearts.

![image](https://github.com/user-attachments/assets/96a90b66-38a3-4b10-91d4-4527f6f643fc)

![image](https://github.com/user-attachments/assets/31211055-f2ef-4803-a48d-2f78ad89406b)

![image](https://github.com/user-attachments/assets/7c7fd741-5dc0-417c-8734-c8e7d17f70b8)


**Final coding comments**
- There was some debugging that needed to be done, as when I was implementing the hearts using setInterval() it wouldnt show up 5 different hearts at a time. However, due to my code being so similar to the example given, looking at what was different between mine and the example from the workshop, I was able to see that I had added the random value for the x and y values before the hearts() function, making it so that 5 hearts were being drawn, just on top of each other. Changing the random to wihtin the hearts function I was able to fix this.
- There was also another issue with hearts showing up before the text disappeared. I hadn't fully fixed this one, but I fixed it by making the setInterval() time larger than the setTimeout() time. Making the delay of the hearts very large. Looking back, I would want to look into adding in a boolean to check that the screen was over, so from that moment on, the user's mouse presses would trigger the hearts instead of from the start of the canvas. 

# Future development 
- Following the additional comments from above in terms of timing and fixing it
- I would love to implement a way of having the hearts disappear over time, as when the user spams the mouse button, it can easily cover the whole canvas very quickly
- This disappearing could be from transparency but also having the hearts animate moving upwards so that they move off the canvas and out of sight.

# Reflection
- Overall, I found these new coding concepts to be interesting as I haven't experimented with them before and I can see how useful these will be in the future
- I don't personally love this final output, however this is an experiment and as such it is rough. 
- I liked how I challenged myself with an idea beforehand, making it so that I had more of a plan for what I wanted to make. Giving me a direction to go into for this workshop. 

