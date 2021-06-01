import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import SlantedBorder from "../../assets/svg/slantedBorder";

const { InspectorControls, useBlockProps, InnerBlocks } = window.wp.blockEditor;

const { FormToggle, PanelBody } = window.wp.components;

const { __ } = window.wp.i18n;

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
          <div className="flex items-center">
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
            <label htmlFor="hasSlantedBorders-toggle" className="ml-2">
              {__("Hat schräge Kante")}
            </label>
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        {hasSlantedBorders && (
          <SlantedBorder
            flipped={false}
            fillColor={getSecondaryColorValue(colorTheme)}
          />
        )}
        <div className={`bg-${getSecondaryColorName(colorTheme)}`}>
          <div className="wp-block-ljs-form__wrapper">
            <div
              className={`col-span-10 col-start-2 text-${getPrimaryColorName(
                colorTheme
              )}`}
            >
              <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
            </div>
          </div>
        </div>
        {hasSlantedBorders && (
          <SlantedBorder
            flipped={true}
            fillColor={getSecondaryColorValue(colorTheme)}
          />
        )}
      </div>
    </>
  );
};
