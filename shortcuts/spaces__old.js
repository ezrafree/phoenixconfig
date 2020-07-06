/* SPACES */

/**
 * Switch spaces
 */
setKeyHandler("tab", HYPER, () => switchSpace(1));

setKeyHandler("tab", HYPER_SHIFT, () => switchSpace(-1));

/**
 * Move focused window to previous space
 */
Key.on("[", HYPER_SHIFT, function () {
  const window = Window.focused();

  const space = Space.active();

  if (!window || !space) return;

  const previousSpace = space.previous();

  space.removeWindows([window]);
  previousSpace.addWindows([window]);

  window.focus();
});

/**
 * Move focused window to next space
 */
Key.on("]", HYPER_SHIFT, function () {
  const window = Window.focused();

  const space = Space.active();

  if (!window || !space) return;

  const nextSpace = space.next();

  space.removeWindows([window]);
  nextSpace.addWindows([window]);

  window.focus();
});

/**
 * Move focused window to previous screen
 */
Key.on("left", HYPER_SHIFT, function () {
  // Phoenix.log("--------------------------------------------------");
  const window = Window.focused();

  const space = Space.active();

  if (!window || !space) return;

  const previousSpace = space.previous();

  space.removeWindows([window]);
  previousSpace.addWindows([window]);

  const screens = Screen.all();

  if (screens.length > 1) {
    const scrFrame = Screen.main().flippedFrame();

    const winFrame = window.frame();

    const winTopLeft = window.topLeft();

    let resultX = winTopLeft.x - scrFrame.width;
    // Phoenix.log("resultX", resultX);

    if (resultX < -2560) resultX = resultX + 7680;
    // Phoenix.log("new resultX", resultX + 7680);

    const resultY = winTopLeft.y;

    window.setFrame({
      x: resultX,
      y: resultY,
      width: winFrame.width,
      height: winFrame.height,
    });
  }

  window.focus();
  // Phoenix.log("--------------------------------------------------");
});

/**
 * Move focused window to next screen
 */
Key.on("right", HYPER_SHIFT, function () {
  // Phoenix.log("--------------------------------------------------");
  const window = Window.focused();

  const space = Space.active();

  if (!window || !space) return;

  const nextSpace = space.next();

  space.removeWindows([window]);
  nextSpace.addWindows([window]);

  const screens = Screen.all();

  if (screens.length > 1) {
    const scrFrame = Screen.main().flippedFrame();

    const winFrame = window.frame();

    const winTopLeft = window.topLeft();
    // Phoenix.log("winTopLeft.x: ", winTopLeft.x);

    let resultX = scrFrame.width + winTopLeft.x;
    // Phoenix.log("resultX", resultX);

    if (resultX > 3840) resultX = resultX - 7680;
    // Phoenix.log("new resultX", resultX - 7680);

    const resultY = winTopLeft.y;

    window.setFrame({
      x: resultX,
      y: resultY,
      width: winFrame.width,
      height: winFrame.height,
    });
  }

  window.focus();
  // Phoenix.log("--------------------------------------------------");
});

// Key.on("right", HYPER_SHIFT, function () {
  Phoenix.log("------------------------------");
//   const window = Window.focused();

//   const space = Space.active();

//   if (!window || !space) return;

//   const nextSpace = space.next();

//   const spaceHash = space.hash();
  Phoenix.log("spaceHash: ", spaceHash);

//   const nextSpaceHash = nextSpace.hash();
  Phoenix.log("nextSpaceHash: ", nextSpaceHash);

//   const screenSpaces = Screen.main().spaces();
  Phoenix.log("screenSpaces: ", screenSpaces);

//   const nextScreenSpaces = Screen.main().next().spaces();
  Phoenix.log("nextScreenSpaces: ", nextScreenSpaces);

//   const spaceScreens = Space.active().screens();
  Phoenix.log("spaceScreens: ", spaceScreens);

//   const nextSpaceScreens = Space.active().next().screens();
  Phoenix.log("nextSpaceScreens: ", nextSpaceScreens);

//   const screens = Screen.all();
  Phoenix.log("screens: ", JSON.stringify(screens));

//   const screen = Screen.main();
  Phoenix.log("screen: ", JSON.stringify(screen));

//   const screenHash = screen.hash();
  Phoenix.log("screenHash: ", screenHash);

//   const nextScreenHash = screen.next().hash();
  Phoenix.log("nextScreenHash: ", nextScreenHash);

//   const isSameScreen = screenHash == nextScreenHash ? true : false;
  Phoenix.log("isSameScreen: ", isSameScreen);

//   const screenId = Screen.main().identifier();
  Phoenix.log("screenId: ", screenId);

//   const nextScreenId = Screen.main().next().identifier();
  Phoenix.log("nextScreenId: ", nextScreenId);

//   const isSameId = screenId == nextScreenId ? true : false;
  Phoenix.log("isSameId: ", isSameId);

//   space.removeWindows([window]);
//   nextSpace.addWindows([window]);

//   const spaceIndexWas = getSpaceIndex(space);
  Phoenix.log("spaceIndexWas: ", spaceIndexWas);

//   const nextSpaceIndex = getSpaceIndex(nextSpace);
  Phoenix.log("nextSpaceIndex: ", nextSpaceIndex);

  Phoenix.log("screenSpaces.length: ", screenSpaces.length);

//   const isModulo = nextSpaceIndex % screenSpaces.length === 0;
  Phoenix.log("isModulo: ", isModulo);

//   if (screens.length > 1 && spaceIndexWas !== 0 && isModulo) {
//     const scrFrame = Screen.main().flippedFrame();

//     const winFrame = window.frame();

//     const winTopLeft = window.topLeft();

//     let resultX = scrFrame.width + winTopLeft.x;
//     if (resultX >= 7680) resultX = resultX - 7680;

//     const resultY = winTopLeft.y;

//     window.setFrame({
//       x: resultX,
//       y: resultY,
//       width: winFrame.width,
//       height: winFrame.height,
//     });
//   }

//   window.focus();
  Phoenix.log("------------------------------");
// });
