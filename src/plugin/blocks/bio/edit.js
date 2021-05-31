import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";
import { passColorThemeToInnerBlocks } from "../../lib/lib";
import { useEffect } from "react";

const { InspectorControls, InnerBlocks, useBlockProps } = window.wp.blockEditor;
const { PanelBody, FormToggle } = window.wp.components;

const { __ } = window.wp.i18n;

const { select } = window.wp.data;

export default (props) => {
  const {
    attributes: { colorTheme, imageColumnPosition },
    setAttributes,
    clientId,
  } = props;
  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = [
    "core/heading",
    "core/paragraph",
    "ljs/button",
    "ljs/image",
    "ljs/contact-bar-container",
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
    ["ljs/contact-bar-container"],
  ];

  const innerBlocks =
    select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, colorTheme);
  }, [colorTheme, innerBlocks]);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Bild-Position")} initialOpen={true}>
          <div>
            <FormToggle
              label={__("Bild-Position")}
              help={imageColumnPosition === "left" ? "links" : "rechts"}
              checked={imageColumnPosition === "left" ? true : false}
              onChange={() =>
                setAttributes({
                  imageColumnPosition:
                    imageColumnPosition === "left" ? "right" : "left",
                })
              }
              id="imageColumnPosition-toggle"
            />
            <label htmlFor="imageColumnPosition-toggle">
              {__("Bild links")}
            </label>
          </div>
        </PanelBody>
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`wp-block-ljs-bio__image-wrapper ${
            imageColumnPosition === "left" ? `` : `order-last`
          }`}
        >
          <Image
            className="wp-block-ljs-bio__image"
            placeholder="personFemale"
            {...props}
          />
        </div>
        <div className="wp-block-ljs-bio__content-wrapper">
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
