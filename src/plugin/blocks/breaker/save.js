import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import SlantedBorder from "../../assets/svg/slantedBorder";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes: { colorTheme, hasSlantedBorders } }) => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      {hasSlantedBorders && (
        <SlantedBorder
          flipped={false}
          fillColor={getSecondaryColorValue(colorTheme)}
        />
      )}
      <div
        className={`bg-${getSecondaryColorName(
          colorTheme
        )} wp-block-ljs-breaker__wrapper`}
      >
        <div
          className={`wp-block-ljs-breaker__content text-${getPrimaryColorName(
            colorTheme
          )}`}
        >
          <InnerBlocks.Content />
        </div>
        {hasSlantedBorders && (
          <SlantedBorder
            flipped={true}
            fillColor={getSecondaryColorValue(colorTheme)}
          />
        )}
      </div>
    </div>
  );
};
