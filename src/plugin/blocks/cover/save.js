import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import Image from "../../blockComponents/image";

const { __ } = window.wp.i18n;

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-cover" });
  const { attributes } = props;
  return (
    <div {...blockProps}>
      <Image className="ljs-cover__background" placeholder="crowd" {...props} />
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
