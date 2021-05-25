const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default () => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};
