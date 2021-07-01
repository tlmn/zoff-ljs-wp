import { getPrimaryColorName } from "../../lib/lib";

const { useBlockProps, InnerBlocks } = wp.blockEditor;

export default ({ attributes: { colorTheme } }) => {
  const blockProps = useBlockProps.save({
    className: `border-${getPrimaryColorName(
      colorTheme
    )} marker-${getPrimaryColorName(colorTheme)}`,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};
