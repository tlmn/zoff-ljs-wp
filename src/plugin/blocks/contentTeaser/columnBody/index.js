import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

registerBlockType("ljs/content-teaser-column-body", {
  apiVersion: 2,
  title: "Teaser Inhalt Fließtext-Spalte",
  icon: "tide",
  category: "layout",
  attributes: { colorTheme: { type: "string", default: "purple_red" } },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
