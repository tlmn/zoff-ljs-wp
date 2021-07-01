import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import Image from "../../blockComponents/image";

const { InnerBlocks, useBlockProps } = wp.blockEditor;

export default (props) => {
  const {
    attributes: { colorTheme, hasColoredBg, height },
  } = props;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps} style={{ height: `${height}vh` }}>
      {hasColoredBg ? (
        <div
          className={`absolute w-full h-full top-0 left-0 bg-${getSecondaryColorName(
            colorTheme
          )}`}
        />
      ) : (
        <Image
          className="wp-block-ljs-cover__background"
          placeholder="crowd"
          {...props}
        />
      )}
      <div className="wp-block-ljs-cover__overlay-wrapper">
        <div className="max-w-max">
          <div className="wp-block-ljs-cover__rotation-outer-wrapper">
            <div
              className={`wp-block-ljs-cover__rotation-inner-wrapper text-${getPrimaryColorName(
                colorTheme
              )}`}
            >
              <div
                className={`wp-block-ljs-cover__title ${
                  hasColoredBg
                    ? `wp-block-ljs-cover__title-shadow--white`
                    : `wp-block-ljs-cover__title-shadow--${getPrimaryColorName(
                        colorTheme
                      )}`
                }
                wp-block-ljs-cover__title-bg--${
                  hasColoredBg
                    ? getPrimaryColorName(colorTheme)
                    : getSecondaryColorName(colorTheme)
                }
                wp-block-ljs-cover__title--${
                  hasColoredBg
                    ? getSecondaryColorName(colorTheme)
                    : getPrimaryColorName(colorTheme)
                }
                    `}
              >
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
