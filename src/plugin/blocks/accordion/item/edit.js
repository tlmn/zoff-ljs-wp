import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../../lib/lib";

const { RichText, useBlockProps, BlockToolbar } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes } = props;
  const blockProps = useBlockProps({
    className: `ljs-accordion-item bg-${getSecondaryColorName(
      attributes.colorTheme
    )}`,
  });

  return (
    <>
      <BlockToolbar />

      <div {...blockProps}>
        <div
          className={`ljs-accordion-item__title-wrapper text-${getSecondaryColorName(
            attributes.colorTheme
          )}`}
        >
          <RichText
            value={attributes.title}
            allowedFormats={[]}
            tagName="div"
            className={`ljs-accordion-item__title bg-${getPrimaryColorName(
              attributes.colorTheme
            )}`}
            onChange={(title) => setAttributes({ title })}
            placeholder={__("Titel")}
          />
        </div>

        <div
          className={`ljs-accordion-item__body-wrapper text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        >
          <RichText
            value={attributes.bodyLess}
            allowedFormats={[]}
            tagName="div"
            className={`ljs-accordion-item__body-less`}
            onChange={(bodyLess) => setAttributes({ bodyLess })}
            placeholder={__("Text zusammengeklappt")}
          />
          <hr style={{ borderTopWidth: "2px" }} className="my-6" />
          <RichText
            value={attributes.bodyMore}
            allowedFormats={[]}
            tagName="div"
            className={`ljs-accordion-item__body-more`}
            onChange={(bodyMore) => setAttributes({ bodyMore })}
            placeholder={__("Text ausgeklappt")}
          />
        </div>
      </div>
    </>
  );
};
