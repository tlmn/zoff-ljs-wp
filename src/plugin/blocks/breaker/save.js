import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import SlantedBorder from "../../assets/svg/slantedBorder";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({});

  return (
    <div {...blockProps}>
      {attributes.hasSlantedBorders && (
        <SlantedBorder
          flipped={false}
          fillColor={getSecondaryColorValue(attributes.colorTheme)}
        />
      )}
      <div
        className={`bg-${getSecondaryColorName(
          attributes.colorTheme
        )} ljs-breaker__wrapper`}
      >
        <div
          className={`container flex flex-col items-center justify-center text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        >
          <InnerBlocks.Content />
        </div>
        {attributes.hasSlantedBorders && (
          <SlantedBorder
            flipped={true}
            fillColor={getSecondaryColorValue(attributes.colorTheme)}
          />
        )}
      </div>
    </div>
  );
};
