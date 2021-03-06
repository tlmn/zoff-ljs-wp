import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("ljs/content-teaser", {
  apiVersion: 2,
  title: "Teaser Inhalt",
  icon: "tide",
  category: "ljs/layout",
  attributes: {
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
