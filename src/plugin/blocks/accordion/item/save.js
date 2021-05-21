import {
  getPrimaryColorName,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../../lib/lib";

import MinusIcon from "../../../assets/svg/accordion/minus";
import PlusIcon from "../../../assets/svg/accordion/plus";

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
      <details
        className={`bg-${getSecondaryColorName(
          attributes.colorTheme
        )} ljs-accordion-item ljs-accordion-item__body-wrapper`}
      >
        <summary>
          <RichText.Content
            value={attributes.bodyLess}
            tagName="div"
            className={`ljs-accordion-item__body-less text-${getPrimaryColorName(
              attributes.colorTheme
            )}`}
          />
        </summary>

        <RichText.Content
          value={attributes.bodyMore}
          tagName="div"
          className={`ljs-accordion-item__body-more mt-6 text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        />
      </details>

      <div className="ljs-accordion-item__button-wrapper">
        <button
          className={`ljs-accordion-item__button hover:border-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
          onClick="handleDetailsButtonClick(event); return false;"
        >
          <PlusIcon fillColor={getSecondaryColorValue(attributes.colorTheme)} />
        </button>
        <button
          className={`ljs-accordion-item__button hidden hover:border-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
          onClick="handleDetailsButtonClick(event); return false;"
        >
          <MinusIcon
            fillColor={getSecondaryColorValue(attributes.colorTheme)}
          />
        </button>
      </div>
    </div>
  );
};
