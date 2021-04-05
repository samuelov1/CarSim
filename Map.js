class Map {
  constructor(matrix) {
    this.matrix = matrix;
    this.roads = [];

    for (let i = this.matrix.length - 1; i >= 0; i--) {
      let row = this.matrix[i];

      for (let j = 0; j < row.length; j++) {
        if (row[j] === 1) {
          const width = TILE_SIZE;
          const height = TILE_SIZE;
          const x = (j + 0.5) * TILE_SIZE;
          const y = (i + 0.5) * TILE_SIZE;
          this.roads.push(new Road(width, height, x, y, 0));
        }
      }
    }
  }

  draw() {
    push();
    this.roads.forEach((road) => road.draw());
    pop();
  }
}
