import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

const { __ } = window.wp.i18n;

const { useBlockProps, RichText } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
    className: `ljs-tiles-single text-${getSecondaryColorName(
      attributes.colorTheme
    )}`,
  });

  return (
    <a {...blockProps} href={attributes.url}>
      <img
        srcSet={
          attributes.mediaId != 0
            ? attributes.mediaSrcSet
            : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
        }
        alt={
          attributes.mediaAlt != "" ? attributes.mediaAlt : `Bild zur Kachel`
        }
        className="ljs-tiles-single__image"
      />
      <div className="ljs-tiles-single__wrapper">
        {attributes.title !== "" && (
          <RichText.Content
            value={attributes.title}
            tagName="h4"
            className={`ljs-tiles-single__title text-${getPrimaryColorName(
              attributes.colorTheme
            )} bg-${getSecondaryColorName(attributes.colorTheme)}`}
          />
        )}
      </div>
    </a>
  );
};
