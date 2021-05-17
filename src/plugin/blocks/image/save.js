import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
    className: "ljs-image",
  });
  return (
    <div {...blockProps}>
      <img
        srcSet={
          attributes.mediaId != 0
            ? attributes.mediaSrcSet
            : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
        }
        className="ljs-image__image"
      />
      <RichText.Content
        value={attributes.caption}
        tagName="div"
        className={`ljs-image__caption bg-${getSecondaryColorName(
          attributes.colorTheme
        )} text-${getPrimaryColorName(attributes.colorTheme)}`}
      />
    </div>
  );
};
