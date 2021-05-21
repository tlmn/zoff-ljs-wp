import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";

const { InspectorControls, RichText, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes, clientId } = props;

  const blockProps = useBlockProps({
    className: `ljs-image text-${getPrimaryColorName(attributes.colorTheme)}`,
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
        <Image className="ljs-image__image" placeholder="crowd" {...props} />
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
