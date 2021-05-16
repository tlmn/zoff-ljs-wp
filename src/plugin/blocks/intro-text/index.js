import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/intro-text", {
  apiVersion: 2,
  title: "Intro Text",
  icon: "editor-justify",
  category: "layout",
  attributes: {
    body: {
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
