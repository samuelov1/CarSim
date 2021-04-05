class Road extends Surface {
  constructor(width, height, x, y, z) {
    super(width, height, x, y, z, 120);
  }

  draw() {
    push();
    super.draw();
    pop();
  }
}
