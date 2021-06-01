import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import SlantedBorder from "../../assets/svg/slantedBorder";
import { has } from "browser-sync";

const { __ } = window.wp.i18n;

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

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
      <div className={`bg-${getSecondaryColorName(colorTheme)}`}>
        <div className="wp-block-ljs-form__wrapper">
          <div
            className={`col-span-10 col-start-2 text-${getPrimaryColorName(
              colorTheme
            )}`}
          >
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
      {hasSlantedBorders && (
        <SlantedBorder
          flipped={true}
          fillColor={getSecondaryColorValue(colorTheme)}
        />
      )}
    </div>
  );
};
