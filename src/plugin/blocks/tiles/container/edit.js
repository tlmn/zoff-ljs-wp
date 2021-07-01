import ColorThemeSelector from "../../../inspector/colorThemeSelector";
import { passColorThemeToInnerBlocks } from "../../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;

const { select } = wp.data;

export default (props) => {
  const {
    clientId,
    attributes: { colorTheme },
  } = props;
  const blockProps = useBlockProps({
    className: "ljs-tiles-container",
  });

  const ALLOWED_BLOCKS = ["ljs/tiles-single"];
  const TEMPLATE = [["ljs/tiles-single"]];

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
        <div className="ljs-grid">
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
