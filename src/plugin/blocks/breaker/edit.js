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

export default ({ clientId, ...props }) => {
  const { attributes, setAttributes } = props;
  const blockProps = useBlockProps({});

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
    passColorThemeToInnerBlocks(clientId, attributes.colorTheme);
  }, [attributes.colorTheme, innerBlocks]);

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
        <div
          className={`bg-${getSecondaryColorName(
            attributes.colorTheme
          )} ljs-breaker__wrapper`}
        >
          <div
            className={`container flex flex-col items-center justify-center text-${getPrimaryColorName(
              attributes.colorTheme
            )}`}
          >
            <InnerBlocks
              allowedBlocks={ALLOWED_BLOCKS}
              template={TEMPLATE}
              className="flex justify-center flex-col items-center"
            />
          </div>
          {attributes.hasSlantedBorders && (
            <SlantedBorder
              flipped={true}
              fillColor={getSecondaryColorValue(attributes.colorTheme)}
            />
          )}
        </div>
      </div>
    </>
  );
};
