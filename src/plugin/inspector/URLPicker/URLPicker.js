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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <URLInputButton url={url} onChange={(url) => setAttributes({ url })} />
        <span style={{ marginLeft: "10px" }}>Link auswählen</span>
      </div>
    </PanelBody>
  );
};
