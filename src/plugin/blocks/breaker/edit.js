import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";

const { InnerBlocks, useBlockProps, BlockToolbar, InspectorControls } =
  window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
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
