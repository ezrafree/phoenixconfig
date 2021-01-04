/* SPACES */

/**
 * Switch spaces
 */
setKeyHandler("tab", HYPER, () => switchSpace(1));

setKeyHandler("tab", HYPER_SHIFT, () => switchSpace(-1));

/**
 * Move focused window to previous space
 */
Key.on(",", HYPER, function () {
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
Key.on(".", HYPER, function () {
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
