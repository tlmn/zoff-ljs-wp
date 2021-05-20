import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

import ColorThemeSelector from "../../../inspector/colorThemeSelector";
import Image from "../../../blockComponents/image";
import ImageSelector from "../../../inspector/imageSelector";
import URLPicker from "../../../inspector/URLPicker";

const { InspectorControls, RichText, useBlockProps, BlockToolbar } =
  window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes } = props;
  const blockProps = useBlockProps({
    className: `ljs-tiles-single text-${getSecondaryColorName(
      attributes.colorTheme
    )}`,
  });

  return (
    <>
      <BlockToolbar></BlockToolbar>
      <InspectorControls>
        <ColorThemeSelector {...props} />
        <URLPicker {...props} />
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps} href={attributes.url}>
        <Image
          className="ljs-tiles-single__image"
          placeholder="crowd"
          {...props}
        />
        <div className="ljs-tiles-single__wrapper">
          <RichText
            value={attributes.title}
            tagName="h4"
            className={`ljs-tiles-single__title text-${getPrimaryColorName(
              attributes.colorTheme
            )} bg-${getSecondaryColorName(attributes.colorTheme)}`}
            allowedFormats={[]}
            onChange={(title) => setAttributes({ title })}
            placeholder={__("Titel")}
          />
        </div>
      </div>
    </>
  );
};
