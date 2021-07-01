import {
  getPrimaryColorName,
  passColorThemeToInnerBlocks,
} from "../../../lib/lib";

import { useEffect } from "react";

const { InnerBlocks, useBlockProps } = wp.blockEditor;

const { select } = wp.data;

export default ({ attributes: { colorTheme }, clientId }) => {
  const blockProps = useBlockProps({
    className: `text-${getPrimaryColorName(colorTheme)}`,
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

  const innerBlocks =
    select("core/block-editor").getBlocksByClientId(clientId)[0].innerBlocks;

  useEffect(() => {
    passColorThemeToInnerBlocks(clientId, colorTheme);
  }, [colorTheme, innerBlocks]);

  return (
    <>
      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
      </div>
    </>
  );
};
