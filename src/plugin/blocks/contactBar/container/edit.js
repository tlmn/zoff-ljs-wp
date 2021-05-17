import { useEffect } from "react";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select, dispatch } = window.wp.data;

export default ({ attributes, clientId }) => {
  const blockProps = useBlockProps({
    className: "ljs-contact-bar-container",
  });

  const ALLOWED_BLOCKS = ["ljs/contact-bar-item"];
  const TEMPLATE = [["ljs/contact-bar-item"]];

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
    <div {...blockProps}>
      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
    </div>
  );
};
