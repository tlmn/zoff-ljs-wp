import { passColorThemeToInnerBlocks } from "../../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select } = window.wp.data;

export default ({ attributes, clientId }) => {
  const blockProps = useBlockProps({
    className: "ljs-contact-bar-container",
  });

  const ALLOWED_BLOCKS = ["ljs/contact-bar-item"];
  const TEMPLATE = [["ljs/contact-bar-item"]];

  const innerBlocks =
    select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, attributes.colorTheme);
  }, [attributes.colorTheme, innerBlocks]);

  return (
    <div {...blockProps}>
      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
    </div>
  );
};
