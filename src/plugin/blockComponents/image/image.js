import imageCrowd from "../../assets/images/placeholders/crowd.jpg";
import imagePersonFemale from "../../assets/images/placeholders/personFemale.jpg";
import imagePersonMale from "../../assets/images/placeholders/personMale.jpg";

export default ({ attributes, className, placeholder = "crowd" }) => {
  const placeholderImages = {
    crowd: imageCrowd,
    personFemale: imagePersonFemale,
    personMale: imagePersonMale,
  };

  const { mediaId, mediaSrcSet } = attributes;

  const {
    ljsBlocks: { pluginURL },
  } = window;

  return (
    <img
      srcSet={
        mediaId != 0
          ? mediaSrcSet
          : `${pluginURL}${placeholderImages[placeholder]}`
      }
      className={className}
    />
  );
};
