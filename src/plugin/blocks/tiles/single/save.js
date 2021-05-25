import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

import Image from "../../../blockComponents/image";

const { useBlockProps, RichText } = window.wp.blockEditor;

export default (props) => {
  const {
    attributes: { url, title, colorTheme },
  } = props;
  const blockProps = useBlockProps.save({
    className: `text-${getSecondaryColorName(colorTheme)}`,
  });

  return (
    <a {...blockProps} href={url}>
      <div className="wp-block-ljs-tiles-single__wrapper">
        <Image
          className="wp-block-ljs-tiles-single__image"
          placeholder="crowd"
          {...props}
        />
        <div
          className={`wp-block-ljs-tiles-single__text-wrapper text-${getPrimaryColorName(
            colorTheme
          )}`}
        >
          <RichText.Content
            value={title}
            tagName="h4"
            className={`wp-block-ljs-tiles-single__title bg-${getSecondaryColorName(
              colorTheme
            )}`}
          />
        </div>
      </div>
    </a>
  );
};
