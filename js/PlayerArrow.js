class PlayerArrow {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true,
        restitution:0.8,
        friction:1.0,
        density:1.0
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("assets/arrow.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(UP_ARROW) && angle > -1.9) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    shoot(archerAngle){
        var velocity=p5.Vector.fromAngle(archerAngle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
    }
  }