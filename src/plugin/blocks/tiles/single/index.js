import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;

registerBlockType("ljs/tiles-single", {
  apiVersion: 2,
  title: "Kachel",
  icon: "format-image",
  category: "ljs/layout",
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
  parent: ["ljs/tiles-container"],
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
