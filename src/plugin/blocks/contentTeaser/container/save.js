import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes: { colorTheme } }) => {
  const blockProps = useBlockProps.save({
    className: `bg-${getSecondaryColorName(colorTheme)}`,
  });

  return (
    <div {...blockProps}>
      <div
        className={`wp-block-ljs-content-teaser__wrapper text-${getPrimaryColorName(
          colorTheme
        )}`}
      >
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
