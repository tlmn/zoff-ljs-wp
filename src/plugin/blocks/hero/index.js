import generateSrcSet, {
  getPrimaryColorName,
  getPrimaryColorValue,
  getSecondaryColorName,
  getSecondaryColorValue,
} from "../../lib/lib";

import ColorThemeSelector from "../../inspector/colorThemeSelector";
import Logo from "../../assets/svg/logo";

const { registerBlockType } = window.wp.blocks;
const {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} = window.wp.blockEditor;

const { PanelBody, Button, ResponsiveWrapper, FormToggle } =
  window.wp.components;
const { withSelect } = window.wp.data;
const { __ } = window.wp.i18n;

const BlockEdit = (props) => {
  const blockProps = useBlockProps.save({ className: "ljs-hero-wrapper" });

  const { attributes, setAttributes } = props;

  const removeMedia = () => {
    props.setAttributes({
      mediaId: 0,
      mediaSizes: "",
    });
  };

  const onSelectMedia = (media) => {
    props.setAttributes({
      mediaId: media.id,
      mediaSrcSet: generateSrcSet(media.sizes),
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Farbschema wählen")} initialOpen={true}>
          <ColorThemeSelector
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </PanelBody>
        <PanelBody title={__("Hintergrundbild auswählen")} initialOpen={true}>
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
                  title={__("Hintergrundbild austauschen")}
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
        <PanelBody title={__("Logo")} initialOpen={false}>
          <div className="flex items-center">
            <FormToggle
              label={__("Logo anzeigen")}
              help={attributes.logoHide ? "Ja" : "Nein"}
              checked={attributes.logoHide}
              onChange={() => setAttributes({ logoHide: !attributes.logoHide })}
              id="logoHide-toggle"
            />
            <label htmlFor="logoHide-toggle" className="ml-2">
              {__("Logo anzeigen")}
            </label>
          </div>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <img
          srcSet={
            attributes.mediaId != 0
              ? attributes.mediaSrcSet
              : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
          }
          className="ljs-hero-background"
        />
        <div className="ljs-hero-overlay-wrapper">
          {attributes.logoHide !== true && (
            <Logo
              className="ljs-hero-logo"
              textFill={getSecondaryColorValue(attributes.colorTheme)}
              barsFill={getPrimaryColorValue(attributes.colorTheme)}
            />
          )}
          <div className="ljs-hero-rotation-wrapper-outer">
            <div className="ljs-hero-rotation-wrapper-inner">
              <RichText
                value={attributes.title}
                tagName="h2"
                className={`ljs-hero-subline text-${getPrimaryColorName(
                  attributes.colorTheme
                )} bg-${getSecondaryColorName(attributes.colorTheme)}`}
                allowedFormats={[]}
                onChange={(title) => setAttributes({ title })}
                placeholder={__("Untertitel")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

registerBlockType("ljs/hero", {
  apiVersion: 2,
  title: "Hero (Logo mit Bild)",
  icon: "button",
  category: "layout",
  supports: {
    align: true,
  },
  attributes: {
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaSrcSet: {
      type: "string",
      default: "",
    },
    title: {
      type: "string",
      source: "html",
      selector: ".ljs-hero-subline",
    },
    logoHide: {
      type: "boolean",
    },
    colorTheme: {
      type: "string",
      default: "purple_red",
    },
  },
  edit: withSelect((select, props) => {
    return {
      media: props.attributes.mediaId
        ? select("core").getMedia(props.attributes.mediaId)
        : undefined,
    };
  })(BlockEdit),
  save: (props) => {
    const blockProps = useBlockProps.save({ className: "ljs-hero-wrapper" });
    const { attributes } = props;
    return (
      <div {...blockProps}>
        <img
          srcSet={
            attributes.mediaId != 0
              ? attributes.mediaSrcSet
              : `https://images.unsplash.com/photo-1613428792678-087d5d14238b`
          }
          className="ljs-hero-background"
        />
        <div className="ljs-hero-overlay-wrapper">
          {attributes.logoHide !== true && (
            <Logo
              className="ljs-hero-logo"
              textFill={getSecondaryColorValue(attributes.colorTheme)}
              barsFill={getPrimaryColorValue(attributes.colorTheme)}
            />
          )}
          {attributes.title !== "" && (
            <div className="ljs-hero-rotation-wrapper-outer">
              <div className="ljs-hero-rotation-wrapper-inner">
                <RichText.Content
                  {...blockProps}
                  value={attributes.title}
                  tagName="h2"
                  className={`ljs-hero-subline text-${getPrimaryColorName(
                    attributes.colorTheme
                  )} bg-${getSecondaryColorName(attributes.colorTheme)}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
});
