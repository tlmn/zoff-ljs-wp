import {
  getPrimaryColorName,
  getPrimaryColorValue,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Image from "../../blockComponents/image";
import ImageSelector from "../../inspector/imageSelector";
import Logo from "../../assets/svg/logo";

const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;

const { PanelBody, FormToggle } = wp.components;
const { __ } = wp.i18n;

export default (props) => {
  const {
    attributes: { logoHide, colorTheme, title, mediaIsBW },
    setAttributes,
  } = props;
  const blockProps = useBlockProps();
  return (
    <>
      <InspectorControls>
        <ColorThemeSelector {...props} />

        <ImageSelector {...props} />

        <PanelBody title={__("Logo")} initialOpen={false}>
          <div className="editor-styles-wrapper">
            <div className="inspector-controls">
              <FormToggle
                label={__("Logo anzeigen")}
                help={logoHide ? "Ja" : "Nein"}
                checked={logoHide}
                onChange={() => setAttributes({ logoHide: !logoHide })}
                id="logoHide-toggle"
              />
              <label htmlFor="logoHide-toggle">{__("Logo anzeigen")}</label>
            </div>
          </div>
        </PanelBody>

        <PanelBody title={__("Hintergrundbild")}>
          <div className="inspector-controls">
            <FormToggle
              label={__("Bild schwarz-weiß?")}
              help={mediaIsBW ? "Ja" : "Nein"}
              checked={mediaIsBW}
              onChange={() => setAttributes({ mediaIsBW: !mediaIsBW })}
              id="mediaIsBW-toggle"
            />
            <label htmlFor="mediaIsBW-toggle">{__("Bild schwarz-weiß?")}</label>
          </div>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="wp-block-ljs-hero__overlay" />
        <Image
          className={`wp-block-ljs-hero__background ${
            mediaIsBW ? `image-bw` : ``
          }`}
          placeholder="crowd"
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
          <div className="wp-block-ljs-hero__rotation-outer-wrapper">
            <div
              className={`wp-block-ljs-hero__rotation-inner-wrapper text-${getPrimaryColorName(
                colorTheme
              )}`}
            >
              <RichText
                value={title}
                tagName="h2"
                className={`wp-block-ljs-hero__subline bg-${getSecondaryColorName(
                  colorTheme
                )}`}
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
