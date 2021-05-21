import { getPrimaryColorName } from "../../lib/lib";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default ({ attributes }) => {
  const blockProps = useBlockProps({
    className: `ljs-list border-${getPrimaryColorName(
      attributes.colorTheme
    )} marker-${getPrimaryColorName(attributes.colorTheme)}`,
  });

  const ALLOWED_BLOCKS = ["core/heading", "core/list"];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "Listentitel",
        level: 2,
      },
    ],
    ["core/list"],
  ];

  return (
    <div {...blockProps}>
      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
    </div>
  );
};
