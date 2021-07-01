import BlockEdit from "./edit";
import BlockSave from "./save";

const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

registerBlockType("ljs/image", {
  apiVersion: 2,
  title: "Bild",
  icon: "format-image",
  category: "ljs/media",
  attributes: {
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaSrcSet: {
      type: "string",
      default: "",
    },
    caption: {
      type: "string",
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
