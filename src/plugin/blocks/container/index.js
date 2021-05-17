import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/container", {
  apiVersion: 2,
  title: "Text Container",
  icon: "grid-view",
  category: "layout",
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
    isFullWidth: { type: "boolean", default: true },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});