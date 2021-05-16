import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import URLPicker from "../../inspector/URLPicker";

const { RichText, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes } = props;

  return (
    <>
      <InspectorControls>
        <URLPicker {...props} />
      </InspectorControls>

      <div
        className={`ljs-button text-${getSecondaryColorName(
          attributes.colorTheme
        )} bg-${getPrimaryColorName(
          attributes.colorTheme
        )} border-2 border-transparent`}
      >
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
