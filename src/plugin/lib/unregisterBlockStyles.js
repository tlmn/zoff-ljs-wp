wp.domReady(() => {
  wp.blocks.unregisterBlockStyle("core/button", [
    "default",
    "outline",
    "squared",
    "fill",
  ]);
});
