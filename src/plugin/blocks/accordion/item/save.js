import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-accordion-item" });

  const { attributes } = props;

  return (
    <div {...blockProps}>
      <div className="ljs-accordion-item__title-wrapper">
        <RichText.Content
          value={attributes.title}
          tagName="div"
          className={`ljs-accordion-item__title bg-${getPrimaryColorName(
            attributes.colorTheme
          )} text-${getSecondaryColorName(attributes.colorTheme)}`}
        />
      </div>

      <div className="ljs-accordion-item__body-wrapper">
        <RichText.Content
          value={attributes.bodyLess}
          tagName="div"
          className={`ljs-accordion-item__body-less text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        />

        <RichText.Content
          value={attributes.bodyMore}
          tagName="div"
          className={`ljs-accordion-item__body-more mt-6 text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        />
      </div>
    </div>
  );
};
