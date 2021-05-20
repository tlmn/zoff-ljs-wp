import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import Image from "../../blockComponents/image";

const { __ } = window.wp.i18n;

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;
  const blockProps = useBlockProps.save({
    className: "ljs-image",
  });
  return (
    <div {...blockProps}>
      <Image className="ljs-image__image" placeholder="crowd" {...props} />
      <RichText.Content
        value={attributes.caption}
        tagName="div"
        className={`ljs-image__caption bg-${getSecondaryColorName(
          attributes.colorTheme
        )} text-${getPrimaryColorName(attributes.colorTheme)}`}
      />
    </div>
  );
};
