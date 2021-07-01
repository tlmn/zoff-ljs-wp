import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("ljs/bio", {
  apiVersion: 2,
  title: "Bio",
  icon: "universal-access",
  category: "ljs/text",
  parent: ["ljs/container"],
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
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
