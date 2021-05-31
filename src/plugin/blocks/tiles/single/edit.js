import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

import Image from "../../../blockComponents/image";
import ImageSelector from "../../../inspector/imageSelector";
import URLPicker from "../../../inspector/URLPicker";

const { InspectorControls, RichText, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const {
    attributes: { colorTheme, title },
    setAttributes,
  } = props;
  const blockProps = useBlockProps({
    className: `text-${getSecondaryColorName(colorTheme)}`,
  });

  return (
    <>
      <InspectorControls>
        <URLPicker {...props} />
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div className="wp-block-ljs-tiles-single__wrapper">
          <Image
            className="wp-block-ljs-tiles-single__image"
            placeholder="crowd"
            {...props}
          />
          <div
            className={`wp-block-ljs-tiles-single__text-wrapper text-${getPrimaryColorName(
              colorTheme
            )} box-shadow--10--${getPrimaryColorName(colorTheme)}`}
          >
            <RichText
              value={title}
              tagName="h4"
              className={`wp-block-ljs-tiles-single__title bg-${getSecondaryColorName(
                colorTheme
              )}`}
              allowedFormats={[]}
              onChange={(title) => setAttributes({ title })}
              placeholder={__("Titel")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
