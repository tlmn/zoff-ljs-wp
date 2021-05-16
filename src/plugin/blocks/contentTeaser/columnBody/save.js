import { getPrimaryColorName } from "../../../lib/lib";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes }) => {
  const blockProps = useBlockProps.save({
    className: `ljs-content-teaser-column-body text-${getPrimaryColorName(
      attributes.colorTheme
    )}`,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};
