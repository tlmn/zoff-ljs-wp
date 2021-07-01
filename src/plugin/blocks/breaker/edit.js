import {
  getPrimaryColorName,
  getSecondaryColorName,
  passColorThemeToInnerBlocks,
} from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import { useEffect } from "react";

const { PanelBody, FormToggle } = wp.components;

const { InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;

const { __ } = wp.i18n;

const { select } = wp.data;

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
        <div
          className={`wp-block-ljs-breaker__wrapper bg-${getSecondaryColorName(
            colorTheme
          )} ${hasSlantedBorders ? `has-slanted-borders` : ``}`}
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
      </div>
    </>
  );
};
