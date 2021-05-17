import {
  getPrimaryColorName,
  passColorThemeToInnerBlocks,
} from "../../../lib/lib";

import { useEffect } from "react";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

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
    passColorThemeToInnerBlocks(clientId, attributes.colorTheme);
  }, [attributes.colorTheme]);

  return (
    <>
      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
      </div>
    </>
  );
};
