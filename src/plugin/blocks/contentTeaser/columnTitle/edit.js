import { getPrimaryColorName } from "../../../lib/lib";

const { InnerBlocks, useBlockProps } = wp.blockEditor;

const { __ } = wp.i18n;

export default ({ attributes: { colorTheme } }) => {
  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = ["core/heading", "core/paragraph"];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "Überschrift 1",
        level: 1,
      },
    ],
    [
      "core/heading",
      {
        placeholder: "Überschrift 2",
        level: 2,
      },
    ],
    [
      "core/paragraph",
      {
        placeholder: "Unterzeile",
      },
    ],
  ];

  return (
    <>
      <div {...blockProps}>
        <div
          className={`wp-block-ljs-content-teaser-column-title__wrapper text-${getPrimaryColorName(
            colorTheme
          )}`}
        >
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
