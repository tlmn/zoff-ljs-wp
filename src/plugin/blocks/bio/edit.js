import ColorThemeSelector from "../../inspector/colorThemeSelector";
import ImageSelector from "../../inspector/imageSelector";
import { useEffect } from "react";

const { InspectorControls, InnerBlocks, BlockToolbar, useBlockProps } =
  window.wp.blockEditor;
const { PanelBody, FormToggle } = window.wp.components;

const { __ } = window.wp.i18n;

const { select, dispatch } = wp.data;

export default (props) => {
  const { attributes, setAttributes, clientId } = props;
  const blockProps = useBlockProps({
    className: "ljs-bio",
  });

  const ALLOWED_BLOCKS = [
    "core/heading",
    "core/paragraph",
    "ljs/button",
    "ljs/image",
  ];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "Name der Person",
        level: 2,
      },
    ],
    [
      "core/paragraph",
      {
        placeholder: "Bio",
        level: 2,
      },
    ],
    ["ljs/button"],
  ];

  useEffect(() => {
    select("core/block-editor")
      .getBlocksByClientId(clientId)[0]
      .innerBlocks.forEach((block) => {
        dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
          colorTheme: attributes.colorTheme,
        });
      });
  }, [attributes.colorTheme]);

  return (
    <>
      <BlockToolbar />

      <InspectorControls>
        <PanelBody title={__("Bild-Position")} initialOpen={false}>
          <div className="flex items-center">
            <FormToggle
              label={__("Bild-Position")}
              help={
                attributes.imageColumnPosition === "left" ? "links" : "rechts"
              }
              checked={attributes.imageColumnPosition === "left" ? true : false}
              onChange={() =>
                setAttributes({
                  imageColumnPosition:
                    attributes.imageColumnPosition === "left"
                      ? "right"
                      : "left",
                })
              }
              id="imageColumnPosition-toggle"
            />
            <label htmlFor="imageColumnPosition-toggle" className="ml-2">
              {__("Bild links")}
            </label>
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`ljs-bio__image-wrapper ${
            attributes.imageColumnPosition === "left" ? `` : `order-last`
          }`}
        >
          <img
            srcSet={
              attributes.mediaId != 0
                ? attributes.mediaSrcSet
                : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
            }
            className="ljs-bio__image"
          />
        </div>
        <div className="ljs-bio__content-wrapper">
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
