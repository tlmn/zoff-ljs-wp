const { __ } = window.wp.i18n;
const { useBlockProps } = window.wp.blockEditor;

export default ({ events }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      {!events && "Lade Block"}
      {events && events.length === 0 && "Keine Termine"}
      {events && events.length > 0 && (
        <a href={events[0].link}>{events[0].title.rendered}</a>
      )}
    </div>
  );
};
