import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("ljs/button", {
  apiVersion: 2,
  title: "Button",
  icon: "tide",
  category: "ljs/layout",
  attributes: {
    buttonText: { type: "string", default: "Hier klicken" },
    url: { type: "string" },
    mediaUrl: { type: "string" },
    mediaId: {
      type: "number",
      default: 0,
    },
    isMediaUrl: { type: "boolean", default: false },
    openInNewTab: { type: "boolean", default: false },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
