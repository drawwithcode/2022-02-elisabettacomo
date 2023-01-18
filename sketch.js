//color HEX array 
let colors = ['#ff4851', '#132d4d', '#4058bc', '#ffa300'];

//declare object
let tile;

//I declare 'textInstruction' as a true statement
let textInstruction = true;

function setup() {

  tile = new Tile();

  //canvas has the window size so that the sketch can be responsive
  createCanvas(windowWidth, windowHeight);

  //here i'm setting basic rules: were to set the pivot of the objects, the angle unit and the stroke
  ellipseMode(CORNER);  
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('#fff9e9');
  noStroke();

  //to display the objects defined in the class [line 38]
  tile.display();

  
}

//creating the class
class Tile {
  //defining objects characteristics: position and diameter
  constructor() {
    this.x = 0;
    this.y = 0;
    this.diameter = windowWidth/ 20;
  }
  //display object
  display() {

    // i use the for cycle to create a pattern of element. 
    //the starting point is the this.x = 0, the lenght is the same as the screen, the increment is equal to the tile diameter
    for(let x = this.x; x < width; x+=this.diameter) {
      //i do the same for the height of the screen
      for(let y = this.y; y < height; y+=this.diameter) {
  
        //now, i want to create a pattern that uses 3 different shapes: arcs, circles and squares.
        //i need to set my condition to avoid the overlap of the shapes
  
        //when the random value is less than 0.1, i draw an arc
        if(random()<0.1) {
          //to randomnly fill the shapes:
          let col = random(colors);
          fill(col);
  
          arc(x, y, this.diameter  * 2, this.diameter  * 2, 180, 270);
        } 
        
        //when the random value is between 0.1 and 0.3, i draw an ellipse
        else if(random()>0.1 && random()<0.3)
        {
          let col = random(colors);
          fill(col);
          ellipse(x, y, this.diameter);
        }
  
        //...
        else if(random()>0.3 && random()<0.4)
        {
          let col = random(colors);
          fill(col);
          arc(x - this.diameter, y, this.diameter  * 2, this.diameter  * 2, 270, 360);
        }
  
        //...
        else if(random()>0.4 && random()<0.5)
        {
          let col = random(colors);
          fill(col);
          square(x - this.diameter/2, y - this.diameter/2, this.diameter);
        }
  
        //...
        else if(random()>0.5 && random()<0.6)
        {
          let col = random(colors);
          fill(col);
          square(x + this.diameter/2, y + this.diameter/2, this.diameter);
        }
  
        //...
        else if(random()>0.6 && random()<0.8)
        {
          let col = random(colors);
          fill(col);
          arc(x, y - this.diameter, this.diameter  * 2, this.diameter  * 2, 90, 180);
        }
  
        //if the random value is > 0.8, i draw an arc
        else {
          let col = random(colors);
          fill(col);
          arc(x - this.diameter, y - this.diameter, this.diameter  * 2, this.diameter  * 2, 0, 90);
        }
      }
  
      //i need to stop the animation
      noLoop();
  
      //i set the variable textInstruction
      if(textInstruction){
  
        //a background for the text
        fill('#fff9e9');
        rect(width/2, height/2, width, windowWidth/20 * 1.75);
  
        //the text and its properties
        textFont("RegloBold");
        fill('#132d4d');
        textSize(windowWidth/20/1.75);
        text('CLICK TO RANDOMIZE, PRESS S TO SAVE', width/2, height/2 + 5);
        textAlign(CENTER, CENTER);
      }
      
    }
  }
}

//when i press the mouse, the loop is open again
//the code runs until it reach the noLoop() again

function mousePressed() {

  //setting the textInstruction, after the mouse click, the text dissapear
  textInstruction = false;
 loop();
}

//thanks to this function, the code restart everytime the window changes size
function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}

function keyTyped(){
  //save the pattern when "s" is typed
  if (key === "s" || key === "S") {
    save("pattern.png");
  }
}
