import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { __ } = wp.i18n;

registerBlockType("ljs/hero", {
  apiVersion: 2,
  title: "Hero (Logo mit Bild)",
  icon: "button",
  category: "ljs/layout",
  attributes: {
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaSrcSet: {
      type: "string",
      default: "",
    },
    mediaIsBW: {
      type: "boolean",
      default: true,
    },
    title: {
      type: "string",
    },
    logoHide: {
      type: "boolean",
    },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
    align: {
      type: "string",
      default: "full",
    },
  },
  getEditWrapperProps() {
    return {
      "data-align": "full",
    };
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
