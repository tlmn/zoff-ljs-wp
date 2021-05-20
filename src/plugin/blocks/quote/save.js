import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import Image from "../../blockComponents/image";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-intro-text" });

  const { attributes } = props;

  return (
    <div
      className={`ljs-quote bg-${getSecondaryColorName(attributes.colorTheme)}`}
    >
      <div className="container ljs-grid">
        <div
          className={`ljs-quote__image-wrapper ${
            attributes.imageColumnPosition === "left" ? `` : `order-last`
          }`}
        >
          <Image
            className="ljs-quote__image"
            placeholder="personFemale"
            {...props}
          />
        </div>
        <div
          className={`ljs-quote__content-wrapper text-${getPrimaryColorName(
            attributes.colorTheme
          )}`}
        >
          <RichText.Content
            value={attributes.body}
            tagName="p"
            className="ljs-quote__content-body"
          />
        </div>
      </div>
    </div>
  );
};
