import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;

registerBlockType("ljs/tiles-container", {
  apiVersion: 2,
  title: "Container Kachel",
  icon: "grid-view",
  category: "ljs/layout",
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
