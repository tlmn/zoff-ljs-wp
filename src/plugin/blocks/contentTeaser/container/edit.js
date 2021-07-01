import React, { useEffect } from "react";
import {
  getPrimaryColorName,
  getSecondaryColorName,
  passColorThemeToInnerBlocks,
} from "../../../lib/lib";

import ColorThemeSelector from "../../../inspector/colorThemeSelector";

const { InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;

const { select } = wp.data;

export default (props) => {
  const {
    attributes: { colorTheme },
    clientId,
  } = props;
  const blockProps = useBlockProps({
    className: `bg-${getSecondaryColorName(colorTheme)}`,
  });

  const ALLOWED_BLOCKS = [
    "ljs/content-teaser-column-title",
    "ljs/content-teaser-column-body",
  ];
  const TEMPLATE = [
    ["ljs/content-teaser-column-title"],
    ["ljs/content-teaser-column-body"],
  ];

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
        <div
          className={`wp-blocks-ljs-content-teaser__wrapper text-${getPrimaryColorName(
            colorTheme
          )}`}
        >
          <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            templateLock="all"
          />
        </div>
      </div>
    </>
  );
};
