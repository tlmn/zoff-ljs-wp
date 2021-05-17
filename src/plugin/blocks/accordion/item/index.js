import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/accordion-item", {
  apiVersion: 2,
  title: "Akkordeon-Element",
  icon: "editor-justify",
  category: "layout",
  parent: ["ljs/accordion-container"],
  attributes: {
    title: {
      type: "string",
    },
    bodyLess: {
      type: "string",
    },
    bodyMore: {
      type: "string",
    },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
