import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/contact-bar-container", {
  apiVersion: 2,
  title: "Kontakte Container",
  icon: "buddicons-pm",
  category: "ljs/layout",
  parent: ["ljs/bio"],
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
