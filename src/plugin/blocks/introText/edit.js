import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";

const { InspectorControls, RichText, useBlockProps } = window.wp.blockEditor;

const { FormToggle, PanelBody } = window.wp.components;

const { __ } = window.wp.i18n;

export default (props) => {
  const {
    attributes: { body, colorTheme, hasSlantedBorders },
    setAttributes,
  } = props;
  const blockProps = useBlockProps({
    className: "ljs-intro-text",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Schräge Kanten")} initialOpen={true}>
          <div className="flex items-center">
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
            <label htmlFor="hasSlantedBorders-toggle" className="ml-2">
              {__("Hat schräge Kante")}
            </label>
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
                className={`ljs-intro-text__body`}
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
