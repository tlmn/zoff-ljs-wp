import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/tiles-container", {
  apiVersion: 2,
  title: "Container Kachel",
  icon: "grid-view",
  category: "layout",
  edit: () => BlockEdit(),
  save: () => BlockSave(),
});
