const { URLInputButton } = window.wp.blockEditor;

const { PanelBody } = window.wp.components;
const { __ } = window.wp.i18n;

export default (props) => {
  const {
    attributes: { url },
    setAttributes,
  } = props;

  return (
    <PanelBody label={__("URL auswählen")}>
      <div className="flex justify-center items-center">
        <URLInputButton url={url} onChange={(url) => setAttributes({ url })} />
        <span className="ml-3">Link auswählen</span>
      </div>
    </PanelBody>
  );
};
