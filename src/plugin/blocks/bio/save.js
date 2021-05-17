const { __ } = window.wp.i18n;

const { useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-bio" });

  const { attributes } = props;

  return (
    <div {...blockProps}>
      <div
        className={`ljs-bio__image-wrapper ${
          attributes.imageColumnPosition === "left" ? `` : `order-last`
        }`}
      >
        <img
          srcSet={
            attributes.mediaId != 0
              ? attributes.mediaSrcSet
              : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
          }
          className="ljs-bio__image"
        />
      </div>
      <div className="ljs-bio__content-wrapper">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
