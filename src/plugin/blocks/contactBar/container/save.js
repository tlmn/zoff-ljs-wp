const { useBlockProps, InnerBlocks } = wp.blockEditor;

export default () => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};
