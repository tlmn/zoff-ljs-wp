import ColorThemeSelector from "../../inspector/colorThemeSelector";
import { passColorThemeToInnerBlocks } from "../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select } = window.wp.data;

const { PanelBody, FormToggle } = window.wp.components;

export default (props) => {
  const { setAttributes, attributes, clientId } = props;
  const blockProps = useBlockProps({
    className: "ljs-container",
  });

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
    passColorThemeToInnerBlocks(clientId, attributes.colorTheme);
  }, [attributes.colorTheme, innerBlocks]);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Container Breite")} initialOpen={true}>
          <div className="flex items-center">
            <FormToggle
              label={__("breiter Container")}
              help={attributes.isFullWidth ? "breit" : "schmal"}
              checked={attributes.isFullWidth}
              onChange={() =>
                setAttributes({
                  isFullWidth: !attributes.isFullWidth,
                })
              }
              id="isFullWidth-toggle"
            />
            <label htmlFor="isFullWidth-toggle" className="ml-2">
              {__("breiter Container")}
            </label>
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`col-span-full ${
            !attributes.isFullWidth ? `md:col-span-10 md:col-start-2` : ``
          }`}
        >
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
