import { passColorThemeToInnerBlocks } from "../../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { select } = window.wp.data;

export default ({ attributes: { colorTheme }, clientId }) => {
  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = ["ljs/contact-bar-item"];
  const TEMPLATE = [["ljs/contact-bar-item"]];

  const innerBlocks =
    select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, colorTheme);
  }, [colorTheme, innerBlocks]);

  return (
    <div {...blockProps}>
      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
    </div>
  );
};
