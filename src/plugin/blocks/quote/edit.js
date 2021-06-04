import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";

const { InspectorControls, RichText, useBlockProps } = window.wp.blockEditor;
const { PanelBody, FormToggle } = window.wp.components;

const { __ } = window.wp.i18n;

export default (props) => {
  const {
    attributes: { imageColumnPosition, colorTheme, body },
    setAttributes,
  } = props;

  const blockProps = useBlockProps({
    className: `bg-${getSecondaryColorName(colorTheme)}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Bild-Position")} initialOpen={false}>
          <div className="editor-styles-wrapper">
            <div className="inspector-controls">
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
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div className="wp-block-ljs-quote__wrapper">
          <div
            className={`wp-block-ljs-quote__image-wrapper ${
              imageColumnPosition === "left" ? `` : `order-last`
            }`}
          >
            <Image
              className="wp-block-ljs-quote__image"
              placeholder="personFemale"
              {...props}
            />
          </div>
          <div
            className={`wp-block-ljs-quote__content-wrapper text-${getPrimaryColorName(
              colorTheme
            )}`}
          >
            <RichText
              value={body}
              allowedFormats={["core/italic", "core/underline"]}
              tagName="p"
              className="wp-block-ljs-quote__content-body"
              onChange={(body) => setAttributes({ body })}
              placeholder={__("Hier kommt der Zitat-Text rein.")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
