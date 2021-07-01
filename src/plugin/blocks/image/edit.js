import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";

const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;

const { __ } = wp.i18n;

export default (props) => {
  const {
    attributes: { colorTheme, caption },
    setAttributes,
    clientId,
  } = props;

  const blockProps = useBlockProps({
    className: `text-${getPrimaryColorName(colorTheme)}`,
  });

  const isInnerBlock = (clientId) =>
    clientId !==
    wp.data.select("core/editor").getBlockHierarchyRootClientId(clientId);

  return (
    <>
      <InspectorControls>
        {!isInnerBlock && <ColorThemeSelector {...props} />}
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <Image
          className="wp-block-ljs-image__image"
          placeholder="crowd"
          {...props}
        />
        <RichText
          value={caption}
          tagName="div"
          className={`wp-block-ljs-image__caption bg-${getSecondaryColorName(
            colorTheme
          )}`}
          allowedFormats={["core/bold"]}
          onChange={(caption) => setAttributes({ caption })}
          placeholder={__("Bildunterschrift")}
        />
      </div>
    </>
  );
};
