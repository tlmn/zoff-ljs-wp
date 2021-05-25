import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

import Image from "../../blockComponents/image";

const { RichText, useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const {
    attributes: { colorTheme, caption },
  } = props;
  const blockProps = useBlockProps.save();
  return (
    <div {...blockProps}>
      <Image
        className="wp-block-ljs-image__image"
        placeholder="crowd"
        {...props}
      />
      <RichText.Content
        value={caption}
        tagName="div"
        className={`wp-block-ljs-image__caption bg-${getSecondaryColorName(
          colorTheme
        )} text-${getPrimaryColorName(colorTheme)}`}
      />
    </div>
  );
};
