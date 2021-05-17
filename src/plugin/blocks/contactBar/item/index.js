import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/contact-bar-item", {
  apiVersion: 2,
  title: "Text Container",
  icon: "grid-view",
  category: "layout",
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
    url: { type: "string", default: "" },
    contactType: { type: "string", default: "mail" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
