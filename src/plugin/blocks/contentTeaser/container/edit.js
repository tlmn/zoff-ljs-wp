import React, { useEffect } from "react";
import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

import ColorThemeSelector from "../../../inspector/colorThemeSelector";

const { InnerBlocks, useBlockProps, BlockToolbar, InspectorControls } =
  window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select, dispatch } = window.wp.data;

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

  const { clientId } = props;

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
      <BlockToolbar />

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
