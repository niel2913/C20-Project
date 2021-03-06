var car, wall;
var speed, weight;



function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500 , 200, 60, height/2);
  speed = random(55, 90);
  weight = random(400, 1500);

}

function draw() {
  background(255,255,255);  
  wall.shapeColor = color(80, 80, 80);
  car.velocityX = speed;
  car.collide(wall);
  if (wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var Deformation = (0.5 * weight * speed * speed)/22500;
    car.velocityX = 0;
    if (Deformation < 100){
      wall.shapeColor = color(0, 255, 0);
    }
    if (Deformation > 100 && Deformation < 180){
      wall.shapeColor = color(230, 230, 0);
    }
    if (Deformation > 180){
      wall.shapeColor = color(255, 0, 0);
      
    }
  }
  drawSprites();
}