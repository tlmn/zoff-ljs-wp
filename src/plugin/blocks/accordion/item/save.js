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
  const {
    attributes: { title, colorTheme, bodyLess, bodyMore },
  } = props;

  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="wp-block-ljs-accordion-item__title-wrapper">
        <RichText.Content
          value={title}
          tagName="div"
          className={`wp-block-ljs-accordion-item__title bg-${getPrimaryColorName(
            colorTheme
          )} text-${getSecondaryColorName(colorTheme)}`}
        />
      </div>
      <details
        className={`bg-${getSecondaryColorName(
          colorTheme
        )} wp-block-ljs-accordion-item__body-wrapper`}
      >
        <summary>
          <RichText.Content
            value={bodyLess}
            tagName="div"
            className={`wp-block-ljs-accordion-item__body-less text-${getPrimaryColorName(
              colorTheme
            )}`}
          />
        </summary>

        <RichText.Content
          value={bodyMore}
          tagName="div"
          className={`wp-block-ljs-accordion-item__body-more mt-6 text-${getPrimaryColorName(
            colorTheme
          )}`}
        />
      </details>

      <div className="wp-block-ljs-accordion-item__button-wrapper">
        <button
          className={`wp-block-ljs-accordion-item__button hover:border-${getPrimaryColorName(
            colorTheme
          )}`}
          onClick="handleDetailsButtonClick(event); return false;"
        >
          <PlusIcon fillColor={getSecondaryColorValue(colorTheme)} />
        </button>
        <button
          className={`wp-block-ljs-accordion-item__button hidden hover:border-${getPrimaryColorName(
            colorTheme
          )}`}
          onClick="handleDetailsButtonClick(event); return false;"
        >
          <MinusIcon fillColor={getSecondaryColorValue(colorTheme)} />
        </button>
      </div>
    </div>
  );
};
