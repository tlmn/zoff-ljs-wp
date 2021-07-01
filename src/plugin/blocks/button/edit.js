import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import MediaSelector from "../../inspector/mediaSelector/mediaSelector";
import URLPicker from "../../inspector/URLPicker";

const { RichText, InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, FormToggle } = wp.components;

const { __ } = wp.i18n;

export default (props) => {
  const {
    attributes: { colorTheme, buttonText, isMediaUrl, openInNewTab },
    setAttributes,
  } = props;

  const blockProps = useBlockProps({
    className: `text-${getSecondaryColorName(
      colorTheme
    )} bg-${getPrimaryColorName(colorTheme)}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("In neuen Tab öffnen?")} initialOpen={true}>
          <div className="editor-styles-wrapper">
            <div className="inspector-controls">
              <FormToggle
                label={__("In neuen Tab öffnen")}
                help={openInNewTab ? "ja" : "nein"}
                checked={openInNewTab}
                onChange={() =>
                  setAttributes({
                    openInNewTab: !openInNewTab,
                  })
                }
                id="openInNewTab-toggle"
              />
              <label htmlFor="openInNewTab-toggle">
                {__("In neuen Tab öffnen")}
              </label>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Ist Datei-Link?")} initialOpen={true}>
          <div className="editor-styles-wrapper">
            <div className="inspector-controls">
              <FormToggle
                label={__("Ist Datei-Link")}
                help={isMediaUrl ? "ja" : "nein"}
                checked={isMediaUrl}
                onChange={() =>
                  setAttributes({
                    isMediaUrl: !isMediaUrl,
                  })
                }
                id="isMediaUrl-toggle"
              />
              <label htmlFor="isMediaUrl-toggle">{__("Ist Datei-Link")}</label>
            </div>
          </div>
        </PanelBody>
        {!isMediaUrl ? <URLPicker {...props} /> : <MediaSelector {...props} />}
      </InspectorControls>

      <div {...blockProps}>
        <RichText
          value={buttonText}
          allowedFormats={[]}
          onChange={(buttonText) => setAttributes({ buttonText })}
          placeholder={__("Button-Text")}
        />
      </div>
    </>
  );
};
