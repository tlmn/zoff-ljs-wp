import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";
import Logo from "../../assets/svg/logo";

const { InnerBlocks, InspectorControls, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes } = props;

  const blockProps = useBlockProps({ className: "ljs-cover" });

  const ALLOWED_BLOCKS = ["core/heading"];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "erste Zeile",
        level: 2,
        className: `bg-${getSecondaryColorName(
          attributes.colorTheme
        )} text-${getPrimaryColorName(
          attributes.colorTheme
        )} shadow-${getPrimaryColorName(attributes.colorTheme)}`,
      },
    ],
    [
      "core/heading",
      {
        placeholder: "zweite Zeile",
        level: 2,
        className: `bg-${getSecondaryColorName(
          attributes.colorTheme
        )} text-${getPrimaryColorName(
          attributes.colorTheme
        )} shadow-${getPrimaryColorName(attributes.colorTheme)}`,
      },
    ],
  ];

  return (
    <>
      <InspectorControls>
        <ColorThemeSelector {...props} />
        <ImageSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <Image
          className="ljs-cover__background"
          placeholder="crowd"
          {...props}
        />
        <div className="ljs-cover__overlay-wrapper">
          <div className="max-w-max">
            <div className="ljs-cover__rotation-outer-wrapper">
              <div
                className={`ljs-cover__rotation-inner-wrapper text-${getPrimaryColorName(
                  attributes.colorTheme
                )}`}
              >
                <div className="ljs-cover__title">
                  <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
