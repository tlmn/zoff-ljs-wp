import {
  getPrimaryColorName,
  getPrimaryColorValue,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import Image from "../../blockComponents/image";
import Logo from "../../assets/svg/logo";

const { RichText, useBlockProps } = wp.blockEditor;

export default (props) => {
  const {
    attributes: { colorTheme, title, logoHide, mediaIsBW },
  } = props;
  const blockProps = useBlockProps.save();
  return (
    <div {...blockProps}>
      <div className="wp-block-ljs-hero__overlay" />
      <Image
        className={`wp-block-ljs-hero__background ${
          mediaIsBW ? `image-bw` : ``
        }`}
        placeHolder="crowd"
        {...props}
      />
      <div className="wp-block-ljs-hero__overlay-wrapper">
        {logoHide !== true && (
          <Logo
            className="wp-block-ljs-hero__logo"
            textFill={getSecondaryColorValue(colorTheme)}
            barsFill={getPrimaryColorValue(colorTheme)}
          />
        )}
        {title !== "" && (
          <div className="wp-block-ljs-hero__rotation-outer-wrapper">
            <div className="wp-block-ljs-hero__rotation-inner-wrapper">
              <RichText.Content
                value={title}
                tagName="h2"
                className={`wp-block-ljs-hero__subline text-${getPrimaryColorName(
                  colorTheme
                )} bg-${getSecondaryColorName(colorTheme)}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
