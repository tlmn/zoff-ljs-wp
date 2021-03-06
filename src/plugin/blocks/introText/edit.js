import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";

const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;

const { FormToggle, PanelBody } = wp.components;

const { __ } = wp.i18n;

export default (props) => {
  const {
    attributes: { body, colorTheme, hasSlantedBorders },
    setAttributes,
  } = props;
  const blockProps = useBlockProps();

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Schräge Kanten")} initialOpen={true}>
          <div className="editor-styles-wrapper">
            <div className="inspector-controls">
              <FormToggle
                label={__("Hat schräge Kanten")}
                help={hasSlantedBorders ? "ja" : "nein"}
                checked={hasSlantedBorders}
                onChange={() =>
                  setAttributes({
                    hasSlantedBorders: !hasSlantedBorders,
                  })
                }
                id="hasSlantedBorders-toggle"
              />
              <label htmlFor="hasSlantedBorders-toggle">
                {__("Hat schräge Kante")}
              </label>
            </div>
          </div>
        </PanelBody>
        <ColorThemeSelector {...props} />
      </InspectorControls>

      <div {...blockProps}>
        <div
          className={`bg-${getSecondaryColorName(colorTheme)} ${
            hasSlantedBorders ? `has-slanted-borders` : ``
          }`}
        >
          <div className="container ljs-grid">
            <div
              className={`col-span-10 col-start-2 text-${getPrimaryColorName(
                colorTheme
              )}`}
            >
              <RichText
                value={body}
                allowedFormats={[
                  "core/italic",
                  "core/underline",
                  "core/bold",
                  "core/link",
                ]}
                tagName="p"
                className={`wp-block-ljs-intro-text__body`}
                onChange={(body) => setAttributes({ body })}
                placeholder={__("Hier kommt der Intro-Text rein.")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
