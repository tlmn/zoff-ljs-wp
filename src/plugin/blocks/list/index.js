import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/list", {
  apiVersion: 2,
  title: "Liste",
  icon: "editor-ul",
  category: "layout",
  parent: ["ljs/container"],
  attributes: { colorTheme: { type: "string", default: "purple_red" } },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
