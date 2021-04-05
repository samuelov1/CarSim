const VEHICLE_WIDTH = 25;
const VEHICLE_HEIGHT = 15;
const VEHICLE_DEPTH = 50;

class SmartVehicle extends Vehicle {
  constructor() {
    const instructions = [
      [4, 20],
      [4, 16],
      [4, 15],
      [5, 14],
      [6, 14],
      [20, 14],
      []
    ];
    const { x, y, z } = indexToPosition(instructions[0][0], instructions[0][1]);
    super(VEHICLE_WIDTH, VEHICLE_HEIGHT, VEHICLE_DEPTH, x, y, z);
    instructions.splice(0, 1);
    this.instructions = instructions;
    this.targetDir = this.calculateTargetDirection();
    this.dir = this.targetDir;
    this.id = round(Math.random() * 1000);
  }

  calculateTargetDirection() {
    const nextVec = indexToPosition(
      this.instructions[0][0],
      this.instructions[0][1]
    );
    const deltaVector = nextVec.sub(this.position);
    return degrees(deltaVector.heading());
  }

  drive() {
    if (this.instructions.length === 1 || this.isOutOfBounds()) {
      console.log(cars.map((car) => car.id));
      cars = cars.filter((car) => car.id === this.id);
      return;
    }

    const currentIndex = positionToIndex(this.position);
    const targetIndex = this.instructions[0];

    if (
      currentIndex[0] === targetIndex[0] &&
      currentIndex[1] === targetIndex[1]
    ) {
      this.instructions.splice(0, 1);
    }
    this.targetDir = this.calculateTargetDirection();
  }

  isOutOfBounds() {
    return (
      this.position.x > MAP_SIZE ||
      this.position.x < 0 ||
      this.position.y > MAP_SIZE ||
      this.position.y < 0
    );
  }

  draw() {
    this.drive();
    super.draw();
  }
}

function positionToIndex(position) {
  const x = floor(position.x / TILE_SIZE);
  const y = floor(position.y / TILE_SIZE);

  return [x, y];
}

function indexToPosition(col, row) {
  const x = col * TILE_SIZE + TILE_SIZE / 2;
  const y = row * TILE_SIZE + TILE_SIZE / 2;
  const z = 0;

  return createVector(x, y, z);
}
