import Image from "../../blockComponents/image";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default (props) => {
  const {
    attributes: { imageColumnPosition },
  } = props;

  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div
        className={`wp-block-ljs-bio__image-wrapper ${
          imageColumnPosition === "left" ? `` : `order-last`
        }`}
      >
        <Image
          className="wp-block-ljs-bio__image"
          placeholder="personFemale"
          {...props}
        />
      </div>
      <div className="wp-block-ljs-bio__content-wrapper">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
