import { getPrimaryColorName } from "../../../lib/lib";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default ({ attributes }) => {
  const blockProps = useBlockProps({
    className: "ljs-content-teaser-column-title",
  });

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
          className={`ljs-content-teaser-column-title__wrapper text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        >
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
