import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/contact-bar-item", {
  apiVersion: 2,
  title: "Kontaktbar Item",
  icon: "grid-view",
  category: "layout",
  parent: ["ljs/contact-bar-container"],
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
    url: { type: "string", default: "" },
    contactType: { type: "string", default: "mail" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
