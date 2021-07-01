import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType("ljs/intro-text", {
  apiVersion: 2,
  title: "Intro Text",
  icon: "editor-justify",
  category: "ljs/text",
  attributes: {
    body: {
      type: "string",
    },
    hasSlantedBorders: {
      type: "boolean",
      default: false,
    },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
    align: {
      type: "string",
      default: "full",
    },
  },
  getEditWrapperProps() {
    return {
      "data-align": "full",
    };
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
