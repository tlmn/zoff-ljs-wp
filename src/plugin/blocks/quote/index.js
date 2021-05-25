import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;

registerBlockType("ljs/quote", {
  apiVersion: 2,
  title: "Zitat mit Bild",
  icon: "format-gallery",
  category: "ljs/text",
  attributes: {
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaSrcSet: {
      type: "string",
      default: "",
    },
    imageColumnPosition: {
      type: "string",
      default: "left",
    },
    body: {
      type: "string",
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
