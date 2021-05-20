import imageCrowd from "../../assets/images/placeholders/crowd.jpg";
import imagePersonFemale from "../../assets/images/placeholders/personFemale.jpg";
import imagePersonMale from "../../assets/images/placeholders/personMale.jpg";

export default ({ attributes, className, placeholder = "crowd" }) => {
  const placeholderImages = {
    crowd: imageCrowd,
    personFemale: imagePersonFemale,
    personMale: imagePersonMale,
  };

  return (
    <img
      srcSet={
        attributes.mediaId != 0
          ? attributes.mediaSrcSet
          : `${window.ljsBlocks.pluginURL}${placeholderImages[placeholder]}`
      }
      className={className}
    />
  );
};
