/* SIDES */

const sides = [
  ["up", HYPER, ["vhalf-1"]], // top half of screen
  ["right", HYPER, ["half-2"]], // right half of screen
  ["down", HYPER, ["vhalf-2"]], // bottom half of screen
  ["left", HYPER, ["half-1"]], // left half of screen
];

setKeysHandler(setFrame, sides);
