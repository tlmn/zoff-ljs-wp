import { getPrimaryColorName } from "../../../lib/lib";

const { InnerBlocks, useBlockProps, BlockToolbar } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default ({ attributes }) => {
  const blockProps = useBlockProps.save({
    className: `ljs-content-teaser-column-body text-${getPrimaryColorName(
      attributes.colorTheme
    )}`,
  });

  const ALLOWED_BLOCKS = ["core/heading", "core/paragraph", "core/button"];
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
    [
      "core/button",
      {
        placeholder: "Hier klicken",
      },
    ],
  ];

  return (
    <>
      <BlockToolbar></BlockToolbar>

      <div {...blockProps}>
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
      </div>
    </>
  );
};
