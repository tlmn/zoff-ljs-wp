import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType("ljs/form", {
  apiVersion: 2,
  title: "Formular (mit Shortcode)",
  icon: "editor-justify",
  category: "ljs/layout",
  attributes: {
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
