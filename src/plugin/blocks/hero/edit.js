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

const { InspectorControls, RichText, useBlockProps } = window.wp.blockEditor;

const { PanelBody, FormToggle } = window.wp.components;
const { __ } = window.wp.i18n;

export default (props) => {
  const blockProps = useBlockProps({ className: "ljs-hero__wrapper" });

  const { attributes, setAttributes } = props;

  return (
    <>
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
        <Image
          className="ljs-hero__background"
          placeholder="crowd"
          {...props}
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
            <div
              className={`ljs-hero__rotation-inner-wrapper text-${getPrimaryColorName(
                attributes.colorTheme
              )}`}
            >
              <RichText
                value={attributes.title}
                tagName="h2"
                className={`ljs-hero__subline bg-${getSecondaryColorName(
                  attributes.colorTheme
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
