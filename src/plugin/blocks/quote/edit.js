import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import ImageSelector from "../../inspector/imageSelector";

const { InspectorControls, RichText, BlockToolbar } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes } = props;

  return (
    <>
      <BlockToolbar />

      <InspectorControls>
        <ColorThemeSelector {...props} />
        <ImageSelector {...props} />
      </InspectorControls>

      <div
        className={`ljs-quote bg-${getSecondaryColorName(
          attributes.colorTheme
        )}`}
      >
        <div className="container ljs-grid">
          <div className="ljs-quote__image-wrapper">
            <img
              srcSet={
                attributes.mediaId != 0
                  ? attributes.mediaSrcSet
                  : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
              }
              className="ljs-quote__image"
            />
          </div>
          <div
            className={`ljs-quote__content-wrapper text-${getPrimaryColorName(
              attributes.colorTheme
            )}`}
          >
            <RichText
              value={attributes.body}
              allowedFormats={[]}
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
