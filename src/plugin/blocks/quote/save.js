import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import Image from "../../blockComponents/image";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const {
    attributes: { colorTheme, body, imageColumnPosition },
  } = props;
  const blockProps = useBlockProps.save({
    className: `bg-${getSecondaryColorName(colorTheme)}`,
  });

  return (
    <div {...blockProps}>
      <div className="wp-block-ljs-quote__wrapper">
        <div
          className={`wp-block-ljs-quote__image-wrapper ${
            imageColumnPosition === "left" ? `` : `order-last`
          }`}
        >
          <Image
            className="wp-block-ljs-quote__image"
            placeholder="personFemale"
            {...props}
          />
        </div>
        <div
          className={`wp-block-ljs-quote__content-wrapper text-${getPrimaryColorName(
            colorTheme
          )}`}
        >
          <RichText.Content
            value={body}
            tagName="p"
            className="wp-block-ljs-quote__content-body"
          />
        </div>
      </div>
    </div>
  );
};
