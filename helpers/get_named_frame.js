/* GET NAMED FRAME */

function getNamedFrame(name) {
  const altDLeft = 100 - LEFT_WIDTH_PERCENTAGE,
    dTop = (TOP_HEIGHT_PERCENTAGE - 50) / 100,
    dLeft = (LEFT_WIDTH_PERCENTAGE - 50) / 100,
    dLeftAlt = (altDLeft - 50) / 100,
    dTopHalf = (50 - 50) / 100,
    dLeftHalf = (50 - 50) / 100;

  switch (name) {
    /* SIDES */
    case "top":
      return [0, 0, 1, 0.5 + dTop];
    case "right":
      return [0.5 + dLeft, 0, 0.5 - dLeft, 1];
    case "right-alt":
      return [0.5 + dLeftAlt, 0, 0.5 - dLeftAlt, 1];
    case "bottom":
      return [0, 0.5 + dTop, 1, 0.5 - dTop];
    case "left":
      return [0, 0, 0.5 + dLeft, 1];
    case "left-alt":
      return [0, 0, 0.5 + dLeftAlt, 1];
    /* CORNERS */
    case "top-left":
      return [0, 0, 0.5 + dLeft, 0.5 + dTop];
    case "top-right":
      return [0.5 + dLeft, 0, 0.5 - dLeft, 0.5 + dTop];
    case "bottom-right":
      return [0.5 + dLeft, 0.5 + dTop, 0.5 - dLeft, 0.5 - dTop];
    case "bottom-left":
      return [0, 0.5 + dTop, 0.5 + dLeft, 0.5 - dTop];
    /* HALVES CORNERS */
    case "top-left-half":
      return [0, 0, 0.5 + dLeftHalf, 0.5 + dTopHalf];
    case "top-right-half":
      return [0.5 + dLeftHalf, 0, 0.5 - dLeftHalf, 0.5 + dTopHalf];
    case "bottom-right-half":
      return [0.5 + dLeftHalf, 0.5 + dTopHalf, 0.5 - dLeftHalf, 0.5 - dTopHalf];
    case "bottom-left-half":
      return [0, 0.5 + dTopHalf, 0.5 + dLeftHalf, 0.5 - dTopHalf];
    /* HALVES */
    case "half-1":
      return [0 / 2, 0, 1 / 2, 1];
    case "half-2":
      return [1 / 2, 0, 1 / 2, 1];
    case "vhalf-1":
      return [0, 0 / 2, 1, 1 / 2];
    case "vhalf-2":
      return [0, 1 / 2, 1, 1 / 2];
    /* THIRDS */
    case "third-1":
      return [0 / 3, 0, 1 / 3, 1];
    case "third-2":
      return [1 / 3, 0, 1 / 3, 1];
    case "third-3":
      return [2 / 3, 0, 1 / 3, 1];
    case "vthird-1":
      return [0, 0 / 3, 1, 1 / 3];
    case "vthird-2":
      return [0, 1 / 3, 1, 1 / 3];
    case "vthird-3":
      return [0, 2 / 3, 1, 1 / 3];
    /* SIXTHS */
    case "sixths-1":
      return [0 / 3, 0, 1 / 3, 1 / 2];
    case "sixths-2":
      return [1 / 3, 0, 1 / 3, 1 / 2];
    case "sixths-3":
      return [2 / 3, 0, 1 / 3, 1 / 2];
    case "sixths-4":
      return [0 / 3, 1 / 2, 1 / 3, 1 / 2];
    case "sixths-5":
      return [1 / 3, 1 / 2, 1 / 3, 1 / 2];
    case "sixths-6":
      return [2 / 3, 1 / 2, 1 / 3, 1 / 2];
    /* DEFAULT */
    default:
      throw new Error(`Undefined frame named: "${name}"`);
  }
}
