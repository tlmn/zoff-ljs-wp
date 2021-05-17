import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import ImageSelector from "../../inspector/imageSelector";

const { InspectorControls, RichText, useBlockProps, BlockToolbar } =
  window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes } = props;

  const blockProps = useBlockProps({
    className: `ljs-image text-${getPrimaryColorName(attributes.colorTheme)}`,
  });
  return (
    <>
      <BlockToolbar />
      <InspectorControls>
        <ColorThemeSelector {...props} />
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <img
          srcSet={
            attributes.mediaId != 0
              ? attributes.mediaSrcSet
              : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
          }
          className="ljs-image__image"
        />
        <RichText
          value={attributes.caption}
          tagName="div"
          className={`ljs-image__caption bg-${getSecondaryColorName(
            attributes.colorTheme
          )}`}
          allowedFormats={["core/bold"]}
          onChange={(caption) => setAttributes({ caption })}
          placeholder={__("Bildunterschrift")}
        />
      </div>
    </>
  );
};
