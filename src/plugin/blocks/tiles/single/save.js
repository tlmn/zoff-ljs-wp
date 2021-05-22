import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

import Image from "../../../blockComponents/image";

const { __ } = window.wp.i18n;

const { useBlockProps, RichText } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
    className: `text-${getSecondaryColorName(attributes.colorTheme)}`,
  });

  return (
    <a {...blockProps} href={attributes.link}>
      <div className="wp-block-ljs-tiles-single__wrapper">
        <Image
          className="wp-block-ljs-tiles-single__image"
          placeholder="crowd"
          {...props}
        />
        <div
          className={`wp-block-ljs-tiles-single__text-wrapper text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        >
          <RichText.Content
            value={attributes.title}
            tagName="h4"
            className={`wp-block-ljs-tiles-single__title bg-${getSecondaryColorName(
              attributes.colorTheme
            )}`}
          />
        </div>
      </div>
    </a>
  );
};
