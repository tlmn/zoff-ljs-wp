import React, { useEffect } from "react";
import {
  getPrimaryColorName,
  getSecondaryColorName,
  passColorThemeToInnerBlocks,
} from "../../../lib/lib";

import ColorThemeSelector from "../../../inspector/colorThemeSelector";

const { InnerBlocks, useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select } = window.wp.data;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps({
    className: `ljs-content-teaser bg-${getSecondaryColorName(
      attributes.colorTheme
    )}`,
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
    passColorThemeToInnerBlocks(clientId, attributes.colorTheme);
  }, [attributes.colorTheme, innerBlocks]);

  return (
    <>
      <InspectorControls>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`container ljs-grid text-${getPrimaryColorName(
            attributes.colorTheme
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
