const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

const { PanelBody, Button } = wp.components;

const { __ } = wp.i18n;

export default ({ attributes, setAttributes }) => {
  const onSelectMedia = (media) => {
    setAttributes({
      mediaId: media.id,
      mediaUrl: media.url,
    });
  };

  return (
    <PanelBody title={__("Datei auswählen")} initialOpen={true}>
      <div className="editor-post-featured-image">
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelectMedia}
            value={attributes.mediaId}
            allowedTypes={[]}
            render={({ open }) => (
              <Button
                className={
                  attributes.mediaId == 0
                    ? "editor-post-featured-image__toggle"
                    : "editor-post-featured-image__preview"
                }
                onClick={open}
              >
                {__("Datei auswählen")}
              </Button>
            )}
          />
        </MediaUploadCheck>
      </div>
    </PanelBody>
  );
};
