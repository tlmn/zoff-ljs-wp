import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("ljs/contact-bar-item", {
  apiVersion: 2,
  title: "Kontaktbar Item",
  icon: "grid-view",
  category: "ljs/text",
  parent: ["ljs/contact-bar-container"],
  attributes: {
    colorTheme: { type: "string", default: "purple_red" },
    url: { type: "string", default: "" },
    contactType: { type: "string", default: "mail" },
  },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
