import { getPrimaryColorName } from "../../../lib/lib";

const { useBlockProps, InnerBlocks } = wp.blockEditor;

export default ({ attributes: { colorTheme } }) => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div
        className={`wp-block-ljs-content-teaser-column-title__wrapper text-${getPrimaryColorName(
          colorTheme
        )}`}
      >
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
