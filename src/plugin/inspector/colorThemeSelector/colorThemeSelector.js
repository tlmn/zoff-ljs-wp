import { corporateThemes, secondaryThemes } from "../../config";

import ColorThemeOption from "../colorThemeOption";
import React from "react";

const { PanelBody } = window.wp.components;
const { __ } = window.wp.i18n;

export default (props) => (
  <PanelBody title={__("Farbschema wählen")} initialOpen={true}>
    <span style={{ display: "block", fontWeight: "bold" }}>Hauptfarben</span>
    {corporateThemes.map((theme) => (
      <ColorThemeOption theme={theme} {...props} />
    ))}
    <span style={{ display: "block", fontWeight: "bold", marginTop: "1rem" }}>
      Geht auch...
    </span>
    {secondaryThemes.map((theme) => (
      <ColorThemeOption theme={theme} {...props} />
    ))}
  </PanelBody>
);
