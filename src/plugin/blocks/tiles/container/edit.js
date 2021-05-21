const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default () => {
  const blockProps = useBlockProps({
    className: "ljs-tiles-container",
  });

  const ALLOWED_BLOCKS = ["ljs/tiles-single"];
  const TEMPLATE = [["ljs/tiles-single"]];

  return (
    <div {...blockProps}>
      <div className="ljs-grid">
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
      </div>
    </div>
  );
};
