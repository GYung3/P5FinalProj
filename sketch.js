function setup() {
  createCanvas(500, 500);
  pg = createGraphics(400, 250);
}

function draw() {
	background(173,216,230);
	//background(red, green, blue);
	//range of value (0-255)
  fill(10, 157, 250);
  rect(0, 0, width, height);
  fill(255,255,127);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60); //small ellipse that follow mouse

	fill(255,255,127)
	stroke(6);
	textSize(50);
	textFont("Courier New");
	text("Sun", 50,100);

	fill(255)
	stroke(6);
	textSize(50);
	textFont("Courier New");
	text("Cloud", 300,375);

  pg.background(250);
  pg.noFill();
  pg.stroke(100);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);
	//mouseX - give us the value of x coordinate of our mouseX
	//mouseY - give us the value of x coordinate of our mouseY


  image(pg, 150, 75);
}
