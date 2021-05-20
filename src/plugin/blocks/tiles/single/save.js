import { getPrimaryColorName, getSecondaryColorName } from "../../../lib/lib";

import Image from "../../../blockComponents/image";

const { __ } = window.wp.i18n;

const { useBlockProps, RichText } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
    className: `ljs-tiles-single text-${getSecondaryColorName(
      attributes.colorTheme
    )}`,
  });

  return (
    <a {...blockProps} href={attributes.url}>
      <Image
        className="ljs-tiles-single__image"
        placeholder="crowd"
        {...props}
      />
      <div className="ljs-tiles-single__wrapper">
        {attributes.title !== "" && (
          <RichText.Content
            value={attributes.title}
            tagName="h4"
            className={`ljs-tiles-single__title text-${getPrimaryColorName(
              attributes.colorTheme
            )} bg-${getSecondaryColorName(attributes.colorTheme)}`}
          />
        )}
      </div>
    </a>
  );
};
