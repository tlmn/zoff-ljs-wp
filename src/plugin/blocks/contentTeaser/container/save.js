import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

const { __ } = window.wp.i18n;

const { useBlockProps, InnerBlocks } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
    className: `ljs-content-teaser bg-${getSecondaryColorName(
      attributes.colorTheme
    )}`,
  });

  return (
    <div {...blockProps}>
      <div
        className={`container ljs-grid text-${getPrimaryColorName(
          attributes.colorTheme
        )}`}
      >
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
