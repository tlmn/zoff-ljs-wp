import { useEffect } from "react";

const { InnerBlocks, useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select, dispatch } = wp.data;

const { PanelBody, FormToggle } = window.wp.components;

export default ({ setAttributes, attributes, clientId }) => {
  const blockProps = useBlockProps({
    className: "ljs-container",
  });

  const ALLOWED_BLOCKS = ["core/heading", "core/paragraph", "ljs/button"];
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

  useEffect(() => {
    select("core/block-editor")
      .getBlocksByClientId(clientId)[0]
      .innerBlocks.forEach((block) => {
        dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
          colorTheme: attributes.colorTheme,
        });
      });
  }, [attributes.colorTheme]);

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
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`col-span-full ${
            attributes.isFullWidth ? `md:col-span-10 md:col-start-2` : ``
          }`}
        >
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
