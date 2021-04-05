/// <reference path="./libraries/p5.d/p5.global-mode.d.ts" />

const WINDOW_W = 1000;
const WINDOW_H = 500;
const TILE_SIZE = 50;
const ZOOM_SENSITIVITY = 0.001;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const MAP = [
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
];

// const MAP = [
//   //     0  1  2  3  4
//   /*0*/ [0, 0, 1, 0, 0],
//   /*1*/ [0, 1, 1, 1, 0],
//   /*2*/ [1, 0, 1, 0, 1],
//   /*3*/ [0, 0, 1, 0, 0],
//   /*4*/ [0, 0, 1, 0, 0]
// ];

const MAP_SIZE = MAP.length * TILE_SIZE;

let camera;
let cars = [];
let map;
let pressedKey;
let camZoom = 0.5;

function setup() {
  createCanvas(WINDOW_W, WINDOW_H, WEBGL);
  setAttributes("antialias", true);
  initUI();
  camera = createCamera();
  selectedVehicle = new SmartVehicle();
  cars.push(selectedVehicle);
  map = new Map(MAP);
}

function mouseWheel(event) {
  camZoom = constrain(
    camZoom - event.deltaY * ZOOM_SENSITIVITY,
    MIN_ZOOM,
    MAX_ZOOM
  );
}

function draw() {
  background(30);
  fill(255, 0, 0);

  film(camera);
  drawCoordintaes();

  cars.forEach((car) => car.draw());
  map.draw();
}

function drawCoordintaes() {
  // x axis - red
  push();
  translate(50, 0, 0);
  fill(255, 0, 0);
  box(100, 5, 5);
  pop();
  // y axis - green
  push();
  translate(0, 50, 0);
  fill(0, 255, 0);
  box(5, 100, 5);
  pop();
  // z axis - blue
  push();
  translate(0, 0, 50);
  fill(0, 0, 255);
  box(5, 5, 100);
  pop();
}
