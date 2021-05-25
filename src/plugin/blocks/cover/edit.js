import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";

const { InnerBlocks, InspectorControls, useBlockProps } = window.wp.blockEditor;
const { PanelBody, FormToggle } = window.wp.components;

const { __ } = window.wp.i18n;

export default (props) => {
  const {
    attributes: { colorTheme, hasColoredBg },
    setAttributes,
  } = props;

  const blockProps = useBlockProps();

  const ALLOWED_BLOCKS = ["core/heading"];
  const TEMPLATE = [
    [
      "core/heading",
      {
        placeholder: "erste Zeile",
        level: 2,
        className: `bg-${getSecondaryColorName(
          colorTheme
        )} text-${getPrimaryColorName(colorTheme)} shadow-${getPrimaryColorName(
          colorTheme
        )}`,
      },
    ],
    [
      "core/heading",
      {
        placeholder: "zweite Zeile",
        level: 2,
        className: `bg-${getSecondaryColorName(
          colorTheme
        )} text-${getPrimaryColorName(colorTheme)} shadow-${getPrimaryColorName(
          colorTheme
        )}`,
      },
    ],
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Farbiger Hintergrund")} initialOpen={true}>
          <div className="flex items-center">
            <FormToggle
              label={__("hat farbigen Hintergrund")}
              help={hasColoredBg ? "ja" : "nein"}
              checked={hasColoredBg}
              onChange={() =>
                setAttributes({
                  hasColoredBg: !hasColoredBg,
                })
              }
              id="hasColoredBg-toggle"
            />
            <label htmlFor="hasColoredBg-toggle" className="ml-2">
              {__("hat farbigen Hintergrund")}
            </label>
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
        {!hasColoredBg && <ImageSelector {...props} />}
      </InspectorControls>

      <div {...blockProps}>
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
                <div className="wp-block-ljs-cover__title">
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
