const { InnerBlocks, useBlockProps, BlockToolbar } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default () => {
  const blockProps = useBlockProps.save({
    className: "ljs-tiles-container",
  });

  const ALLOWED_BLOCKS = ["ljs/tiles-single"];
  const TEMPLATE = [["ljs/tiles-single"]];

  return (
    <>
      <BlockToolbar></BlockToolbar>

      <div {...blockProps} className="container">
        <div className="ljs-grid">
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
        </div>
      </div>
    </>
  );
};
