import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = wp.i18n;
const { useBlockProps } = wp.blockEditor;

export default ({
  attributes: {
    colorTheme,
    isMediaUrl,
    mediaUrl,
    url,
    buttonText,
    openInNewTab,
  },
}) => {
  const blockProps = useBlockProps.save({
    className: `text-${getSecondaryColorName(
      colorTheme
    )} bg-${getPrimaryColorName(colorTheme)}`,
  });

  return (
    <a
      href={isMediaUrl ? mediaUrl : url}
      {...blockProps}
      rel={openInNewTab ? `_blank` : `_self`}
      rel="noreferrer noopener"
    >
      {buttonText}
    </a>
  );
};
