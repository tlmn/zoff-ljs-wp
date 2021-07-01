import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("ljs/list", {
  apiVersion: 2,
  title: "Liste",
  icon: "editor-ul",
  category: "ljs/text",
  parent: ["ljs/container"],
  attributes: { colorTheme: { type: "string", default: "purple_red" } },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
