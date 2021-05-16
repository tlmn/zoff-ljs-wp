import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-intro-text" });

  const { attributes } = props;

  return (
    <div
      className={`ljs-quote bg-${getSecondaryColorName(attributes.colorTheme)}`}
    >
      <div className="container ljs-grid">
        <div className="ljs-quote__image-wrapper">
          <img
            srcSet={
              attributes.mediaId != 0
                ? attributes.mediaSrcSet
                : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
            }
            className="ljs-quote__image"
          />
        </div>
        <div
          className={`ljs-quote__content-wrapper text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        >
          <RichText.Content
            value={attributes.body}
            tagName="p"
            className="ljs-quote__content-body"
          />
        </div>
      </div>
    </div>
  );
};
