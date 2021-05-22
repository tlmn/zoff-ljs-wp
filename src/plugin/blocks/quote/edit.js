import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";

const { InspectorControls, RichText, useBlockProps } = window.wp.blockEditor;
const { PanelBody, FormToggle } = window.wp.components;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes, focus } = props;
  const blockProps = useBlockProps({
    className: `ljs-quote bg-${getSecondaryColorName(attributes.colorTheme)}`,
  });

  return (
    <>
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
        <div className="container ljs-grid">
          <div
            className={`ljs-quote__image-wrapper ${
              attributes.imageColumnPosition === "left" ? `` : `order-last`
            }`}
          >
            <Image
              className="ljs-quote__image"
              placeholder="personFemale"
              {...props}
            />
          </div>
          <div
            className={`ljs-quote__content-wrapper text-${getPrimaryColorName(
              attributes.colorTheme
            )}`}
          >
            <RichText
              value={attributes.body}
              allowedFormats={["core/italic", "core/underline"]}
              tagName="p"
              className="ljs-quote__content-body"
              onChange={(body) => setAttributes({ body })}
              placeholder={__("Hier kommt der Zitat-Text rein.")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
