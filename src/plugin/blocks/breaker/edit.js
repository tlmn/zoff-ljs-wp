import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import { useEffect } from "react";

const { InnerBlocks, useBlockProps, BlockToolbar, InspectorControls } =
  window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { select, dispatch } = wp.data;

export default ({ clientId, ...props }) => {
  const { attributes } = props;
  const blockProps = useBlockProps({
    className: `ljs-breaker bg-${getSecondaryColorName(attributes.colorTheme)}`,
  });

  const ALLOWED_BLOCKS = ["core/heading", "ljs/button"];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "Die einzige Chance im Kapitalismus zu überleben:",
        level: 2,
      },
    ],
    [
      "core/heading",
      {
        placeholder: "Mitglied werden",
        level: 1,
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
      <BlockToolbar></BlockToolbar>

      <InspectorControls>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`container flex flex-col items-center justify-center text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        >
          <InnerBlocks
            allowedBlocks={ALLOWED_BLOCKS}
            template={TEMPLATE}
            className="flex justify-center flex-col items-center"
          />
        </div>
      </div>
    </>
  );
};
