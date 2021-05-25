import ColorThemeSelector from "../../inspector/colorThemeSelector";
import { passColorThemeToInnerBlocks } from "../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select } = window.wp.data;

const { PanelBody, FormToggle } = window.wp.components;

export default (props) => {
  const {
    setAttributes,
    attributes: { isFullWidth, colorTheme },
    clientId,
  } = props;
  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = [
    "core/heading",
    "core/paragraph",
    "ljs/button",
    "ljs/image",
    "ljs/bio",
    "ljs/list",
    "ljs/accordion-container",
  ];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "Überschrift",
        level: 2,
      },
    ],
    [
      "core/paragraph",
      {
        placeholder: "Fließtext",
        level: 2,
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
        <PanelBody title={__("Container-Breite")} initialOpen={true}>
          <div>
            <FormToggle
              label={__("breiter Container")}
              help={isFullWidth ? "breit" : "schmal"}
              checked={isFullWidth}
              onChange={() =>
                setAttributes({
                  isFullWidth: !isFullWidth,
                })
              }
              id="isFullWidth-toggle"
            />
            <label htmlFor="isFullWidth-toggle">
              {__("breiter Container")}
            </label>
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`wp-block-ljs-container__content-wrapper ${
            !isFullWidth
              ? `wp-block-ljs-container__content-wrapper--constraint`
              : ``
          }`}
        >
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
