const { __ } = window.wp.i18n;
const { useBlockProps } = window.wp.blockEditor;

export default ({ events }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="col-span-full">
        <h2>Hier wird der nächste Termin angezeigt</h2>
      </div>
    </div>
  );
};
