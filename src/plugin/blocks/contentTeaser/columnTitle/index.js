import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("ljs/content-teaser-column-title", {
  apiVersion: 2,
  title: "Teaser Inhalt Titel-Spalte",
  icon: "tide",
  category: "ljs/text",
  parent: ["ljs/content-teaser"],
  attributes: { colorTheme: { type: "string", default: "purple_red" } },
  edit: (props) => BlockEdit(props),
  save: (props) => BlockSave(props),
});
