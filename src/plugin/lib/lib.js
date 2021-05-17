import { colorThemes, colors } from "../config";

const { select, dispatch } = wp.data;

export const generateSrcSet = (sizes) => {
  let srcSet = "";
  const keys = Object.keys(sizes);
  for (const key of keys) {
    srcSet += sizes[key]["url"] + " " + sizes[key]["width"] + "w, ";
  }
  return srcSet;
};

export const getPrimaryColorName = (colorTheme) => {
  return colorThemes.filter((theme) => theme.label === colorTheme)[0].colors[0];
};

export const getSecondaryColorName = (colorTheme) => {
  return colorThemes.filter((theme) => theme.label === colorTheme)[0].colors[1];
};

export const getPrimaryColorValue = (colorTheme) => {
  const primaryColorName = colorThemes.filter(
    (theme) => theme.label === colorTheme
  )[0].colors[0];
  return colors.filter((color) => color.name === primaryColorName)[0].value;
};

export const getSecondaryColorValue = (colorTheme) => {
  const secondaryColorName = colorThemes.filter(
    (theme) => theme.label === colorTheme
  )[0].colors[1];
  return colors.filter((color) => color.name === secondaryColorName)[0].value;
};

export const passColorThemeToInnerBlocks = (clientId, colorTheme) => {
  select("core/block-editor")
    .getBlocksByClientId(clientId)[0]
    .innerBlocks.forEach((block) => {
      dispatch("core/block-editor").updateBlockAttributes(block.clientId, {
        colorTheme: colorTheme,
      });
    });
};
