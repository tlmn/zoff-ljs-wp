const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default () => {
  const blockProps = useBlockProps.save({ className: "ljs-tiles-container" });

  return (
    <div {...blockProps}>
      <div className="ljs-grid">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
