import { generateSrcSet } from "../../lib/lib";

const { MediaUpload, MediaUploadCheck } = window.wp.blockEditor;

const { PanelBody, Button, ResponsiveWrapper } = window.wp.components;

const { __ } = window.wp.i18n;

export default (props) => {
  const { attributes, setAttributes } = props;

  const removeMedia = () => {
    setAttributes({
      mediaId: 0,
      mediaSizes: "",
    });
  };

  const onSelectMedia = (media) => {
    console.log(media);
    setAttributes({
      mediaId: media.id,
      mediaSrcSet: generateSrcSet(media.sizes),
    });
  };
  return (
    <PanelBody title={__("Bild auswählen")} initialOpen={true}>
      <div className="editor-post-featured-image">
        <MediaUploadCheck>
          <MediaUpload
            onSelect={onSelectMedia}
            value={attributes.mediaId}
            allowedTypes={["image"]}
            render={({ open }) => (
              <Button
                className={
                  attributes.mediaId == 0
                    ? "editor-post-featured-image__toggle"
                    : "editor-post-featured-image__preview"
                }
                onClick={open}
              >
                {attributes.mediaId == 0 && __("Hintergrundbild auswählen")}
                {props.media != undefined && (
                  <ResponsiveWrapper
                    naturalWidth={props.media.media_details.width}
                    naturalHeight={props.media.media_details.height}
                  >
                    <img src={props.media.source_url} />
                  </ResponsiveWrapper>
                )}
              </Button>
            )}
          />
        </MediaUploadCheck>
        {attributes.mediaId != 0 && (
          <MediaUploadCheck>
            <MediaUpload
              title={__("Bild austauschen")}
              value={attributes.mediaId}
              onSelect={onSelectMedia}
              allowedTypes={["image"]}
              render={({ open }) => (
                <Button onClick={open} isDefault isLarge>
                  {__("Hintergrundbild austauschen")}
                </Button>
              )}
            />
          </MediaUploadCheck>
        )}
        {attributes.mediaId != 0 && (
          <MediaUploadCheck>
            <Button onClick={removeMedia} isLink isDestructive>
              {__("Bild entfernen")}
            </Button>
          </MediaUploadCheck>
        )}
      </div>
    </PanelBody>
  );
};
