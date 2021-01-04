/* HALVES */

const halves = [
  ["[", HYPER, ["left"]], // HYPER + [
  ["]", HYPER, ["right"]], // HYPER + ]
  ["[", HYPER_SHIFT, ["left-alt"]], // HYPER + SHIFT + [
  ["]", HYPER_SHIFT, ["right-alt"]], // HYPER + SHIFT + ]
  // ["[", HYPER_SHIFT, ["top"]], // HYPER + SHIFT + [
  // ["]", HYPER_SHIFT, ["bottom"]], // HYPER + SHIFT + ]
];

setKeysHandler(setFrame, halves);
