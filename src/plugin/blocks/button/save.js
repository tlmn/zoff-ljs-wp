import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes } = props;

  return (
    <a
      className={`ljs-button text-${getSecondaryColorName(
        attributes.colorTheme
      )} bg-${getPrimaryColorName(
        attributes.colorTheme
      )} hover:text-${getPrimaryColorName(
        attributes.colorTheme
      )} hover:bg-${getSecondaryColorName(
        attributes.colorTheme
      )} hover:border-${getPrimaryColorName(attributes.colorTheme)}`}
      href={attributes.url}
    >
      {attributes.buttonText}
    </a>
  );
};
