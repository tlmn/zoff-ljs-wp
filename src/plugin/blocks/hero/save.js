import {
  getPrimaryColorName,
  getPrimaryColorValue,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import Logo from "../../assets/svg/logo";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-hero__wrapper" });
  const { attributes } = props;
  return (
    <div {...blockProps}>
      <img
        srcSet={
          attributes.mediaId != 0
            ? attributes.mediaSrcSet
            : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
        }
        className="ljs-hero__background"
      />
      <div className="ljs-hero__overlay-wrapper">
        {attributes.logoHide !== true && (
          <Logo
            className="ljs-hero__logo"
            textFill={getSecondaryColorValue(attributes.colorTheme)}
            barsFill={getPrimaryColorValue(attributes.colorTheme)}
          />
        )}
        {attributes.title !== "" && (
          <div className="ljs-hero__rotation-outer-wrapper">
            <div className="ljs-hero__rotation-inner-wrapper">
              <RichText.Content
                value={attributes.title}
                tagName="h2"
                className={`ljs-hero__subline text-${getPrimaryColorName(
                  attributes.colorTheme
                )} bg-${getSecondaryColorName(attributes.colorTheme)}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
