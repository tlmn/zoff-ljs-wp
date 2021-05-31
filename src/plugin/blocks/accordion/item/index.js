import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;

registerBlockType("ljs/accordion-item", {
  apiVersion: 2,
  title: "Akkordeon-Element",
  icon: "editor-justify",
  category: "ljs/layout",
  parent: ["ljs/accordion-container"],
  attributes: {
    title: {
      default: "",
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
