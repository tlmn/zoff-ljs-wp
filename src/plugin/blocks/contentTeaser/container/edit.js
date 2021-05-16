import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

import ColorThemeSelector from "../../../inspector/colorThemeSelector";

const { InnerBlocks, useBlockProps, BlockToolbar, InspectorControls } =
  window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
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

  wp.data
    .select("core/block-editor")
    .getBlocksByClientId(clientId)[0]
    .innerBlocks.forEach((block) => {
      wp.data
        .dispatch("core/block-editor")
        .updateBlockAttributes(block.clientId, {
          colorTheme: attributes.colorTheme,
        });
    });

  return (
    <>
      <BlockToolbar></BlockToolbar>

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
