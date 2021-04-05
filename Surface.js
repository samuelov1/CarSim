class Surface {
  constructor(width, height, x, y, z, color = 255, texture) {
    this.width = width;
    this.height = height;
    this.position = createVector(x, y - 1, z);
    this.texture = texture;
    this.color = color;
  }

  draw() {
    push();
    this.texture ? texture(this.texture) : fill(this.color);
    translate(this.position.x, this.position.y, this.position.z);
    plane(this.width, this.height, 1, 1);
    pop();
  }
}
