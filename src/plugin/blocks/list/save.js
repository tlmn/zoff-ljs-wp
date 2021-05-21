import { getPrimaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes }) => {
  const blockProps = useBlockProps.save({
    className: `ljs-list border-${getPrimaryColorName(
      attributes.colorTheme
    )} marker-${getPrimaryColorName(attributes.colorTheme)}`,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};
