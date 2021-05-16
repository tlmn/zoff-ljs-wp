import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-intro-text" });

  const { attributes } = props;

  return (
    <div
      {...blockProps}
      className={`bg-${getPrimaryColorName(attributes.colorTheme)}`}
    >
      <div className="container ljs-grid">
        <div className="col-span-10 col-start-2">
          <RichText.Content
            value={attributes.body}
            tagName="p"
            className={`text-${getSecondaryColorName(
              attributes.colorTheme
            )} ljs-intro-text__body`}
          />
        </div>
      </div>
    </div>
  );
};
