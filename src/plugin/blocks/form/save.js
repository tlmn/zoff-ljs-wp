import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import SlantedBorder from "../../assets/svg/slantedBorder";

const { __ } = window.wp.i18n;

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;

  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      {attributes.hasSlantedBorders && (
        <SlantedBorder
          flipped={false}
          fillColor={getSecondaryColorValue(attributes.colorTheme)}
        />
      )}
      <div className={`bg-${getSecondaryColorName(attributes.colorTheme)}`}>
        <div className="wp-block-ljs-form__wrapper">
          <div
            className={`col-span-10 col-start-2 text-${getPrimaryColorName(
              attributes.colorTheme
            )}`}
          >
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
      {attributes.hasSlantedBorders && (
        <SlantedBorder
          flipped={true}
          fillColor={getSecondaryColorValue(attributes.colorTheme)}
        />
      )}
    </div>
  );
};
