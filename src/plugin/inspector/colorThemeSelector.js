import { corporateThemes, secondaryThemes } from "../config";

import ColorThemeOption from "./colorThemeOption";
import React from "react";

const { PanelBody } = window.wp.components;
const { __ } = window.wp.i18n;

export default (props) => (
  <PanelBody title={__("Farbschema wählen")} initialOpen={true}>
    <span className="font-bold block">Hauptfarben</span>
    {corporateThemes.map((theme) => (
      <ColorThemeOption theme={theme} {...props} />
    ))}
    <span className="font-bold block mt-2">Geht auch...</span>
    {secondaryThemes.map((theme) => (
      <ColorThemeOption theme={theme} {...props} />
    ))}
  </PanelBody>
);
