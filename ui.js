let radio;
let checkbox;

function initUI() {
  createCameraRadio();
  createFollowCheckbox();
}

function createCameraRadio() {
  radio = createRadio();
  cameraModes.forEach((mode) => {
    radio.option(mode);
  });
  radio.selected("follow");
  textAlign(CENTER);
}

function createFollowCheckbox() {
  checkbox = createCheckbox("Follow vehicle", followVehicle);
  checkbox.changed((event) => {
    followVehicle = event.target.checked;
  });
}
