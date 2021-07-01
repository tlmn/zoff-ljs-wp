import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("ljs/container", {
  apiVersion: 2,
  title: "Text Container",
  icon: "grid-view",
  category: "ljs/layout",
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
