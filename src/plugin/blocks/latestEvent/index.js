import BlockEdit from "./edit";
const { registerBlockType } = window.wp.blocks;
const { __ } = window.wp.i18n;

const { withSelect } = window.wp.data;

registerBlockType("ljs/latest-event", {
  apiVersion: 2,
  title: "LJS: Nächster Termin",
  icon: "megaphone",
  category: "ljs/layout",
  edit: withSelect((select) => {
    return {
      events: select("core").getEntityRecords("postType", "event"),
    };
  })(BlockEdit),
  save: () => {
    return null;
  },
});
