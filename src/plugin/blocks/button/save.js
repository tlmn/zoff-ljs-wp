import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;
const { useBlockProps } = window.wp.blockEditor;

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
    )} bg-${getPrimaryColorName(colorTheme)} hover:text-${getPrimaryColorName(
      colorTheme
    )} hover:bg-${getSecondaryColorName(
      colorTheme
    )} hover:border-${getPrimaryColorName(colorTheme)}`,
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
