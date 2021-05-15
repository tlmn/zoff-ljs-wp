import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = window.wp.blocks;
const { withSelect } = window.wp.data;
const { __ } = window.wp.i18n;

registerBlockType("ljs/hero", {
  apiVersion: 2,
  title: "Hero (Logo mit Bild)",
  icon: "button",
  category: "layout",
  attributes: {
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaSrcSet: {
      type: "string",
      default: "",
    },
    title: {
      type: "string",
      source: "html",
    },
    logoHide: {
      type: "boolean",
    },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
  },
  edit: withSelect((select, props) => {
    return {
      media: props.attributes.mediaId
        ? select("core").getMedia(props.attributes.mediaId)
        : undefined,
    };
  })(BlockEdit),
  save: (props) => BlockSave(props),
});
