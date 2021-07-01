import BlockEdit from "./edit";
const { registerBlockType } = wp.blocks;

const { withSelect } = wp.data;

registerBlockType("ljs/latest-event", {
  apiVersion: 2,
  title: "LJS: Nächster Termin",
  icon: "megaphone",
  category: "ljs/layout",
  attributes: {
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
  },
  edit: withSelect((select) => {
    return {
      events: select("core").getEntityRecords("postType", "event"),
    };
  })(BlockEdit),
  save: () => {
    return null;
  },
});
