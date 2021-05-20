import Image from "../../blockComponents/image";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

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
        <Image
          className="ljs-bio__image"
          placeholder="personFemale"
          {...props}
        />
      </div>
      <div className="ljs-bio__content-wrapper">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
