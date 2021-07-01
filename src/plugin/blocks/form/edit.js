import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";

const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;

const { FormToggle, PanelBody } = wp.components;

const { __ } = wp.i18n;

export default (props) => {
  const {
    attributes: { colorTheme, hasSlantedBorders },
    setAttributes,
  } = props;
  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = ["core/shortcode"];

  const TEMPLATE = [["core/shortcode"]];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Schräge Kanten")} initialOpen={true}>
          <div className="editor-styles-wrapper">
            <div className="inspector-controls">
              <FormToggle
                label={__("Hat schräge Kanten")}
                help={hasSlantedBorders ? "ja" : "nein"}
                checked={hasSlantedBorders}
                onChange={() =>
                  setAttributes({
                    hasSlantedBorders: !hasSlantedBorders,
                  })
                }
                id="hasSlantedBorders-toggle"
              />
              <label htmlFor="hasSlantedBorders-toggle">
                {__("Hat schräge Kante")}
              </label>
            </div>
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div className={`bg-${getSecondaryColorName(colorTheme)}`}>
          <div className="wp-block-ljs-form__wrapper">
            <div
              className={`col-span-10 col-start-2 text-${getPrimaryColorName(
                colorTheme
              )} ${hasSlantedBorders ? `has-slanted-borders` : ``}`}
            >
              <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
