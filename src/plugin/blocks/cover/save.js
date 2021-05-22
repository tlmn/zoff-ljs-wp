import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import Image from "../../blockComponents/image";

const { __ } = window.wp.i18n;

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({ className: "ljs-cover" });

  return (
    <div {...blockProps}>
      {attributes.hasColoredBg ? (
        <div
          className={`absolute w-full h-full top-0 left-0 bg-${getSecondaryColorName(
            attributes.colorTheme
          )}`}
        />
      ) : (
        <Image
          className="ljs-cover__background"
          placeholder="crowd"
          {...props}
        />
      )}
      <div className="ljs-cover__overlay-wrapper">
        <div className="max-w-max">
          <div className="ljs-cover__rotation-outer-wrapper">
            <div
              className={`ljs-cover__rotation-inner-wrapper text-${getPrimaryColorName(
                attributes.colorTheme
              )}`}
            >
              <div className="ljs-cover__title">
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
