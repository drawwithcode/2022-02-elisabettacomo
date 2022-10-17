//posX and posY are used to set the starting point of the canvas
let posX = 0;
let posY = 0;

//tile is the unit of the pattern
let tile;

//I declare 'textInstruction' as a true statement
let textInstruction = true;

function setup() {

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

  //I declare that my tile has a dimention based on the screen size. Thanks to this, my tile can adapt to all the devices
  let tile = windowWidth/ 20;

  // i use the for cycle to create a pattern of element. 
  //the starting point is the posX = 0, the lenght is the same as the screen, the increment is equal to a tile
  for(let x = posX; x < width; x+=tile) {
    //i do the same for the height of the screen
    for(let y = posX; y < height; y+=tile) {

      //now, i want to create a pattern that uses 3 different shapes: arcs, circles and squares.
      //i need to set my condition to avoid the overlap of the shapes

      //when the random value is less than 0.1, i draw an arc
      if(random()<0.1) {
        fill('#ff4851');
        arc(x, y, tile  * 2, tile  * 2, 180, 270);
      } 
      
      //when the random value is between 0.1 and 0.3, i draw an ellipse
      else if(random()>0.1 && random()<0.3)
      {
        fill('#132d4d');
        ellipse(x, y, tile);
      }

      //...
      else if(random()>0.3 && random()<0.4)
      {
        fill('#ff4851');
        arc(x - tile, y, tile  * 2, tile  * 2, 270, 360);
      }

      //...
      else if(random()>0.4 && random()<0.5)
      {
        fill('#4058bc');
        square(x - tile/2, y - tile/2, tile);
      }

      //...
      else if(random()>0.5 && random()<0.6)
      {
        fill('#ffa300');
        square(x + tile/2, y + tile/2, tile);
      }

      //...
      else if(random()>0.6 && random()<0.8)
      {
        fill('#132d4d');
        arc(x, y - tile, tile  * 2, tile  * 2, 90, 180);
      }

      //if the random value is > 0.8, i draw an arc
      else {
        fill('#ffa300');
        arc(x - tile, y - tile, tile  * 2, tile  * 2, 0, 90);
      }
    }

    //i need to stop the animation
    noLoop();

    //i set the variable textInstruction
    if(textInstruction){

      //a background for the text
      fill('#4058bc');
      rect(width/2, height/2, tile * 12, tile * 2);

      //the text and its properties
      textFont("RegloBold");
      fill('#fff9e9');
      textSize(tile);
      text('CLICK TO RANDOMIZE!', width/2, height/2);
      textAlign(CENTER, CENTER);
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

// function keyTyped() {
//   if (key === 's') {
//     save(c,'pattern', 'jpg');
//   }
// }