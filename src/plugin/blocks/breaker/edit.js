import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
  passColorThemeToInnerBlocks,
} from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import SlantedBorder from "../../assets/svg/slantedBorder";
import { useEffect } from "react";

const { PanelBody, FormToggle } = window.wp.components;

const { InnerBlocks, useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select } = window.wp.data;

export default (props) => {
  const {
    attributes: { colorTheme, hasSlantedBorders },
    setAttributes,
    clientId,
  } = props;

  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = ["core/heading", "ljs/button"];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "Die einzige Chance im Kapitalismus zu überleben:",
        level: 2,
      },
    ],
    [
      "core/heading",
      {
        placeholder: "Mitglied werden",
        level: 1,
      },
    ],
    ["ljs/button"],
  ];

  const innerBlocks =
    select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, colorTheme);
  }, [colorTheme, innerBlocks]);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Schräge Kanten")} initialOpen={true}>
          <div>
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
        <div
          className={`bg-${getSecondaryColorName(
            colorTheme
          )} wp-block-ljs-breaker__wrapper`}
        >
          <div
            className={`wp-block-ljs-breaker__content text-${getPrimaryColorName(
              colorTheme
            )}`}
          >
            <InnerBlocks
              allowedBlocks={ALLOWED_BLOCKS}
              template={TEMPLATE}
              className="wp-block-ljs-breaker__inner-blocks"
            />
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
