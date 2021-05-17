import ColorThemeSelector from "../../../inspector/colorThemeSelector";
import { passColorThemeToInnerBlocks } from "../../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, clientId } = props;

  const blockProps = useBlockProps({
    className: "ljs-accordion-container",
  });

  const ALLOWED_BLOCKS = ["ljs/accordion-item"];
  const TEMPLATE = [["ljs/accordion-item"]];

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, attributes.colorTheme);
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
