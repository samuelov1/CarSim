const cameraModes = ["follow", "static", "birdsEye"];
let followVehicle = false;
let selectedVehicle = cars[0];

function film(camera) {
  switch (radio.value()) {
    case "follow": {
      return followCar(camera);
    }
    case "static": {
      return staticView(camera);
    }
    case "birdsEye": {
      return birdsEyeView(camera);
    }
    default: {
      return followCar(camera);
    }
  }
}

function followCar(camera) {
  const dirVec = p5.Vector.fromAngle(radians(selectedVehicle.dir));
  const backVec = dirVec.mult(-500 / camZoom);
  const cameraPosition = backVec.add(selectedVehicle.position);

  const x = cameraPosition.x;
  const y = cameraPosition.y;
  const z = 500 / camZoom;
  const centerX = selectedVehicle.position.x;
  const centerY = selectedVehicle.position.y;
  const centerZ = selectedVehicle.position.z;
  const upX = 0;
  const upY = 0;
  const upZ = -1;

  camera.camera(x, y, z, centerX, centerY, centerZ, upX, upY, upZ);
}

function staticView(camera) {
  const x = MAP_SIZE;
  const y = MAP_SIZE;
  const z = MAP_SIZE / camZoom;
  const centerPos = followVehicle
    ? selectedVehicle.position
    : createVector(MAP_SIZE / 2, MAP_SIZE / 2, 0);
  const centerX = centerPos.x;
  const centerY = centerPos.y;
  const centerZ = centerPos.z;
  const upX = 0;
  const upY = 0;
  const upZ = -1;

  camera.camera(x, y, z, centerX, centerY, centerZ, upX, upY, upZ);
}

function birdsEyeView(camera) {
  const centerPos = followVehicle
    ? selectedVehicle.position
    : createVector(MAP_SIZE / 2, MAP_SIZE / 2, 0);
  const x = centerPos.x;
  const y = centerPos.x;
  const z = MAP_SIZE / 2 / camZoom;
  const centerX = centerPos.x;
  const centerY = centerPos.y;
  const centerZ = centerPos.z;
  const upX = 0;
  const upY = 1;
  const upZ = 0;

  camera.camera(x, y, z, centerX, centerY, centerZ, upX, upY, upZ);
}
