class Vehicle {
  constructor(width, height, depth, x, y, z) {
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.position = createVector(x, y, z);
    this.dir = 0;
    this.speed = 2;
    this.acc = 0.04;
    this.drag = 0.01;
    this.maxSpeed = 5;
    this.targetDir = 0;
  }

  update() {
    // if (keyIsDown(LEFT_ARROW)) {
    //   this.dir -= 0.4 * this.speed;
    // } else if (keyIsDown(RIGHT_ARROW)) {
    //   this.dir += 0.4 * this.speed;
    // }
    // if (keyIsDown(UP_ARROW)) {
    //   this.speed = constrain(this.speed + this.acc, 0, this.maxSpeed);
    // } else if (keyIsDown(DOWN_ARROW)) {
    //   this.speed = constrain(this.speed - this.acc * 2, 0, this.maxSpeed);
    // } else {
    //   this.speed = constrain(this.speed - this.drag, 0, this.maxSpeed);
    // }

    if (this.targetDir > this.dir + 1) {
      this.dir += 0.8 * this.speed;
    } else if (this.targetDir < this.dir - 1) {
      this.dir -= 0.8 * this.speed;
    }
  }

  move() {
    const movementVector = p5.Vector.fromAngle(radians(this.dir), this.speed);

    this.position.add(movementVector);
  }

  draw() {
    this.update();
    this.move();
    push();
    fill(255);
    translate(
      this.position.x,
      this.position.y,
      this.position.z + this.height / 2
    );
    rotateZ(radians(this.dir - 90));
    box(this.width, this.depth, this.height);
    pop();
  }
}
