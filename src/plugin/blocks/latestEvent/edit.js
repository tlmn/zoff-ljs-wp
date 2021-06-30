// import ColorThemeSelector from "../../inspector/colorThemeSelector";

const { useBlockProps, InspectorControls } = window.wp.blockEditor;

export default (props) => {
  const blockProps = useBlockProps();

  return (
    <>
      <InspectorControls>
        {/* <ColorThemeSelector {...props} /> */}
      </InspectorControls>

      <div {...blockProps}>
        <div className="col-span-full">
          <h2>Hier wird der nächste Termin angezeigt</h2>
        </div>
      </div>
    </>
  );
};
