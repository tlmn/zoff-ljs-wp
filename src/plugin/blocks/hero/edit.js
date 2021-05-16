import {
  getPrimaryColorName,
  getPrimaryColorValue,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import ImageSelector from "../../inspector/imageSelector";
import Logo from "../../assets/svg/logo";

const { InspectorControls, RichText, useBlockProps, BlockToolbar } =
  window.wp.blockEditor;

const { PanelBody, FormToggle } = window.wp.components;
const { __ } = window.wp.i18n;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-hero__wrapper" });

  const { attributes, setAttributes } = props;

  return (
    <>
      <BlockToolbar></BlockToolbar>
      <InspectorControls>
        <ColorThemeSelector {...props} />

        <ImageSelector {...props} />

        <PanelBody title={__("Logo")} initialOpen={false}>
          <div className="flex items-center">
            <FormToggle
              label={__("Logo anzeigen")}
              help={attributes.logoHide ? "Ja" : "Nein"}
              checked={attributes.logoHide}
              onChange={() => setAttributes({ logoHide: !attributes.logoHide })}
              id="logoHide-toggle"
            />
            <label htmlFor="logoHide-toggle" className="ml-2">
              {__("Logo anzeigen")}
            </label>
          </div>
        </PanelBody>
      </InspectorControls>

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
          <div className="ljs-hero__rotation-outer-wrapper">
            <div className="ljs-hero__rotation-inner-wrapper">
              <RichText
                value={attributes.title}
                tagName="h2"
                className={`ljs-hero__subline text-${getPrimaryColorName(
                  attributes.colorTheme
                )} bg-${getSecondaryColorName(attributes.colorTheme)}`}
                allowedFormats={[]}
                onChange={(title) => setAttributes({ title })}
                placeholder={__("Untertitel")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
