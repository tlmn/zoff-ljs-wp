import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { InnerBlocks, useBlockProps } = window.wp.blockEditor;

export default ({ attributes: { colorTheme, hasSlantedBorders } }) => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div
        className={`bg-${getSecondaryColorName(colorTheme)} ${
          hasSlantedBorders ? `has-slanted-borders` : ``
        }`}
      >
        <div className="wp-block-ljs-form__wrapper">
          <div
            className={`col-span-10 col-start-2 text-${getPrimaryColorName(
              colorTheme
            )}`}
          >
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    </div>
  );
};
