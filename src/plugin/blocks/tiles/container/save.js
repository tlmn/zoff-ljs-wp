const { useBlockProps, InnerBlocks } = wp.blockEditor;

export default () => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="wp-block-tiles-container__wrapper">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
