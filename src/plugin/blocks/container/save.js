const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes: { isFullWidth } }) => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div
        className={`wp-block-ljs-container__content-wrapper ${
          !isFullWidth
            ? `wp-block-ljs-container__content-wrapper--constraint`
            : ``
        }`}
      >
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
