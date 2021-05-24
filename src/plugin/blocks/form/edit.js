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
  const { attributes, setAttributes } = props;
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
              help={attributes.hasSlantedBorders ? "ja" : "nein"}
              checked={attributes.hasSlantedBorders}
              onChange={() =>
                setAttributes({
                  hasSlantedBorders: !attributes.hasSlantedBorders,
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
        {attributes.hasSlantedBorders && (
          <SlantedBorder
            flipped={false}
            fillColor={getSecondaryColorValue(attributes.colorTheme)}
          />
        )}
        <div className={`bg-${getSecondaryColorName(attributes.colorTheme)}`}>
          <div className="wp-block-ljs-form__wrapper">
            <div
              className={`col-span-10 col-start-2 text-${getPrimaryColorName(
                attributes.colorTheme
              )}`}
            >
              <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
            </div>
          </div>
        </div>
        {attributes.hasSlantedBorders && (
          <SlantedBorder
            flipped={true}
            fillColor={getSecondaryColorValue(attributes.colorTheme)}
          />
        )}
      </div>
    </>
  );
};
