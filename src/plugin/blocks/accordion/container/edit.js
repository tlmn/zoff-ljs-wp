import ColorThemeSelector from "../../../inspector/colorThemeSelector";
import { passColorThemeToInnerBlocks } from "../../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;

const { __ } = wp.i18n;

const { select } = wp.data;

export default (props) => {
  const {
    attributes: { colorTheme },
    clientId,
  } = props;

  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = ["ljs/accordion-item"];
  const TEMPLATE = [["ljs/accordion-item"]];

  const innerBlocks =
    select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, colorTheme);
  }, [colorTheme, innerBlocks]);

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
