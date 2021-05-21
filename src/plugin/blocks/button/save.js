import { getPrimaryColorName, getSecondaryColorName } from "../../lib/lib";

const { __ } = window.wp.i18n;
const { useBlockProps } = window.wp.blockEditor;

export default (props) => {
  const { attributes } = props;

  const blockProps = useBlockProps.save({
    className: `ljs-button text-${getSecondaryColorName(
      attributes.colorTheme
    )} bg-${getPrimaryColorName(
      attributes.colorTheme
    )} hover:text-${getPrimaryColorName(
      attributes.colorTheme
    )} hover:bg-${getSecondaryColorName(
      attributes.colorTheme
    )} hover:border-${getPrimaryColorName(attributes.colorTheme)}`,
  });

  return (
    <a href={attributes.url} {...blockProps}>
      {attributes.buttonText}
    </a>
  );
};
