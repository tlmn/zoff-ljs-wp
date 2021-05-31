import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes: { colorTheme, hasSlantedBorders } }) => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div
        className={`wp-block-ljs-breaker__wrapper bg-${getSecondaryColorName(
          colorTheme
        )} ${hasSlantedBorders ? `has-slanted-borders` : ``}`}
      >
        <div
          className={`wp-block-ljs-breaker__content text-${getPrimaryColorName(
            colorTheme
          )}`}
        >
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};
