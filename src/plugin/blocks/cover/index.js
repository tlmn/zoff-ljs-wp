import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

registerBlockType("ljs/cover", {
  apiVersion: 2,
  title: "Cover",
  icon: "cover-image",
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
    hasColoredBg: {
      type: "boolean",
      default: false,
    },
    mediaIsBW: {
      type: "boolean",
      default: true,
    },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
    height: {
      type: "string",
      default: "50",
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
