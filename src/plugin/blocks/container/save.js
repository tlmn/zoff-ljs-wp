const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes }) => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div
        className={`col-span-full ${
          !attributes.isFullWidth ? `md:col-span-10 md:col-start-2` : ``
        }`}
      >
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
