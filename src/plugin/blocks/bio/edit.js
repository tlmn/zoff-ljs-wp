import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";
import { passColorThemeToInnerBlocks } from "../../lib/lib";
import { useEffect } from "react";

const { InspectorControls, InnerBlocks, BlockToolbar, useBlockProps } =
  window.wp.blockEditor;
const { PanelBody, FormToggle } = window.wp.components;

const { __ } = window.wp.i18n;

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

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, attributes.colorTheme);
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
          <Image
            className="ljs-bio__image"
            placeholder="personFemale"
            {...props}
          />
        </div>
        <div className="ljs-bio__content-wrapper">
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
