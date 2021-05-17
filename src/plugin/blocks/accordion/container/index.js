import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/accordion-container", {
  apiVersion: 2,
  title: "Akkordeon Container",
  icon: "table-row-after",
  category: "layout",
  parent: ["ljs/container"],
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
