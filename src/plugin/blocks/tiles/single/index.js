import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/tiles-single", {
  apiVersion: 2,
  title: "Kachel",
  icon: "format-image",
  category: "layout",
  attributes: {
    title: {
      type: "string",
    },
    link: {
      type: "string",
    },
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaSrcSet: {
      type: "string",
      default: "",
    },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
    url: {
      type: "string",
    },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
