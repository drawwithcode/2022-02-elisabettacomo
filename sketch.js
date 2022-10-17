let posX = 0;
let posY = 0;
let tile;

let textInstruction = true;

function setup() {

  createCanvas(windowWidth, windowHeight);

  ellipseMode(CORNER);  
  angleMode(DEGREES);
  rectMode(CENTER);

  noStroke();
}

function draw() {

  background('#fff9e9');

  let tile = windowWidth/ 20;

  for(let x = posX; x < width; x+=tile) {
    for(let y = posX; y < height; y+=tile) {

      if(random()<0.1)
      {
        fill('#ff4851');
        arc(x, y, tile  * 2, tile  * 2, 180, 270);
      } 
      
      else if(random()>0.2 && random()<0.3)
      {
        fill('#132d4d');
        ellipse(x, y, tile);
      }

      else if(random()>0.3 && random()<0.4)
      {
        fill('#ff4851');
        arc(x - tile, y, tile  * 2, tile  * 2, 270, 360);
      }

      else if(random()>0.4 && random()<0.5)
      {
        fill('#4058bc');
        square(x - tile/2, y - tile/2, tile);
      }

      else if(random()>0.5 && random()<0.6)
      {
        fill('#ffa300');
        square(x + tile/2, y + tile/2, tile);
      }

      else if(random()>0.6 && random()<0.8)
      {
        fill('#132d4d');
        arc(x, y - tile, tile  * 2, tile  * 2, 90, 180);
      }

      else {
        fill('#ffa300');
        arc(x - tile, y - tile, tile  * 2, tile  * 2, 0, 90);
      }
    }

    noLoop();

    if(textInstruction){

      fill('#4058bc');
      rect(width/2, height/2 - 6, tile * 12, tile * 2);

      textFont("RegloBold");
      fill('#fff9e9');
      textSize(tile);
      text('CLICK TO RANDOMIZE!', width/2, height/2);
      textAlign(CENTER, CENTER);

    }
    
  }
}

function mousePressed() {
  textInstruction = false;
 loop();
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}

// function keyTyped() {
//   if (key === 's') {
//     save(c,'pattern', 'jpg');
//   }
// }