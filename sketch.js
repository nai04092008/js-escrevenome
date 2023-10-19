function setup() {
  createCanvas(700, 700);
  background ("white")
}

function draw() {
  stroke("white")
  fill("black")

 if(mouseIsPressed) {
      rect(mouseX, mouseY, 50, 50)
  } 
}
  
