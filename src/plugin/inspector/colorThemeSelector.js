import { colorThemes, corporateThemes, secondaryThemes } from "../config";

import React from "react";

export default ({ attributes, setAttributes }) => {
  const ColorSelector = ({ theme }) => (
    <div className="inline-block">
      <input
        type="radio"
        name="colorTheme"
        id={theme}
        value={theme}
        onChange={(e) => setAttributes({ colorTheme: e.target.value })}
        style={{ display: "none" }}
      />
      <label htmlFor={theme}>
        <div
          className={`${theme} colorTheme__thumbnail ${
            theme === attributes.colorTheme &&
            `colorTheme__thumbnail--is-active`
          }`}
        />
      </label>
    </div>
  );
  return (
    <>
      <span className="font-bold block">Hauptfarben</span>
      {corporateThemes.map((theme) => (
        <ColorSelector theme={theme} />
      ))}
      <span className="font-bold block mt-2">Geht auch...</span>
      {secondaryThemes.map((theme) => (
        <ColorSelector theme={theme} />
      ))}
    </>
  );
};
