import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { RichText, useBlockProps } = window.wp.blockEditor;

export default ({ attributes: { colorTheme, hasSlantedBorders, body } }) => {
  const blockProps = useBlockProps.save();

  return (
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
            <RichText.Content
              value={body}
              tagName="p"
              className="wp-block-ljs-intro-text__body"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
