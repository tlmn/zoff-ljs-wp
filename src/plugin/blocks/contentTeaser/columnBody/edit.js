import { getPrimaryColorName } from "../../../lib/lib";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select, dispatch } = wp.data;

export default ({ attributes, clientId }) => {
  const blockProps = useBlockProps({
    className: `ljs-content-teaser-column-body text-${getPrimaryColorName(
      attributes.colorTheme
    )}`,
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
      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
      </div>
    </>
  );
};
