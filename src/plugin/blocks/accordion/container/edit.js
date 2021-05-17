import ColorThemeSelector from "../../../inspector/colorThemeSelector";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select, dispatch } = window.wp.data;

export default (props) => {
  const { attributes, clientId } = props;

  const blockProps = useBlockProps({
    className: "ljs-accordion-container",
  });

  const ALLOWED_BLOCKS = ["ljs/accordion-item"];
  const TEMPLATE = [["ljs/accordion-item"]];

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
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
      </div>
    </>
  );
};
