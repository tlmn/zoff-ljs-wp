import { getPrimaryColorName } from "../../lib/lib";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

export default ({ attributes: { colorTheme } }) => {
  const blockProps = useBlockProps({
    className: `border-${getPrimaryColorName(
      colorTheme
    )} marker-${getPrimaryColorName(colorTheme)}`,
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
