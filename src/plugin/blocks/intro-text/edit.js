import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";

const { InspectorControls, RichText, useBlockProps, BlockToolbar } =
  window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const blockProps = useBlockProps.save({
    className: "ljs-intro-text",
  });
  const { attributes, setAttributes } = props;

  return (
    <>
      <BlockToolbar></BlockToolbar>

      <InspectorControls>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div
        {...blockProps}
        className={`bg-${getPrimaryColorName(attributes.colorTheme)}`}
      >
        <div className="container ljs-grid">
          <div className="col-span-10 col-start-2">
            <RichText
              value={attributes.body}
              allowedFormats={[]}
              tagName="p"
              className={`text-${getSecondaryColorName(
                attributes.colorTheme
              )} ljs-intro-text__body`}
              onChange={(body) => setAttributes({ body })}
              placeholder={__("Hier kommt der Intro-Text rein.")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
