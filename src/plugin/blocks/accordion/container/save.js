const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default () => {
  const blockProps = useBlockProps.save({
    className: "wp-block-ljs-accordion-container",
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};
