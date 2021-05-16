import { getPrimaryColorName } from "../../../lib/lib";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default ({ attributes }) => {
  const blockProps = useBlockProps.save({
    className: "ljs-content-teaser-column-title",
  });

  return (
    <div {...blockProps}>
      <div
        className={`ljs-content-teaser-column-title__wrapper text-${getPrimaryColorName(
          attributes.colorTheme
        )}`}
      >
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
