import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import SlantedBorder from "../../assets/svg/slantedBorder";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-intro-text" });

  const { attributes } = props;

  return (
    <div {...blockProps}>
      {attributes.hasSlantedBorders && (
        <SlantedBorder
          flipped={false}
          fillColor={getSecondaryColorValue(attributes.colorTheme)}
        />
      )}
      <div className={`bg-${getSecondaryColorName(attributes.colorTheme)}`}>
        <div className="container ljs-grid">
          <div
            className={`col-span-10 col-start-2 text-${getPrimaryColorName(
              attributes.colorTheme
            )}`}
          >
            <RichText.Content
              value={attributes.body}
              tagName="p"
              className="ljs-intro-text__body"
            />
          </div>
        </div>
      </div>
      {attributes.hasSlantedBorders && (
        <SlantedBorder
          flipped={true}
          fillColor={getSecondaryColorValue(attributes.colorTheme)}
        />
      )}
    </div>
  );
};
