import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/button", {
  apiVersion: 2,
  title: "Button",
  icon: "tide",
  category: "ljs/layout",
  attributes: {
    buttonText: { type: "string", default: "Hier klicken" },
    url: { type: "string" },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
