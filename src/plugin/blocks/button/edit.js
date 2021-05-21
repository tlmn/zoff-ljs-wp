import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import URLPicker from "../../inspector/URLPicker";

const { RichText, InspectorControls, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes } = props;

  const blockProps = useBlockProps({
    className: `ljs-button text-${getSecondaryColorName(
      attributes.colorTheme
    )} bg-${getPrimaryColorName(attributes.colorTheme)}`,
  });

  return (
    <>
      <InspectorControls>
        <URLPicker {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <RichText
          value={attributes.buttonText}
          allowedFormats={[]}
          onChange={(buttonText) => setAttributes({ buttonText })}
          placeholder={__("Button-Text")}
        />
      </div>
    </>
  );
};
