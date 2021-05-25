import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;

registerBlockType("ljs/accordion-container", {
  apiVersion: 2,
  title: "Akkordeon Container",
  icon: "table-row-after",
  category: "ljs/layout",
  parent: ["ljs/container"],
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
