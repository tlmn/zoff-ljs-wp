import black_green from "../../assets/colorThemes/black_green.png";
import black_red from "../../assets/colorThemes/black_red.png";
import black_white from "../../assets/colorThemes/black_white.png";
import green from "../../assets/colorThemes/green.png";
import green_black from "../../assets/colorThemes/green_black.png";
import purple from "../../assets/colorThemes/purple.png";
import purple_red from "../../assets/colorThemes/purple_red.png";
import red from "../../assets/colorThemes/red.png";
import red_black from "../../assets/colorThemes/red_black.png";
import red_purple from "../../assets/colorThemes/red_purple.png";
import red_white from "../../assets/colorThemes/red_white.png";
import white_red from "../../assets/colorThemes/white_red.png";

export default ({ theme, ...props }) => {
  const { attributes, setAttributes } = props;

  const colorThemeThumbnails = {
    black_green: black_green,
    black_red: black_red,
    black_white: black_white,
    green_black: green_black,
    green: green,
    purple_red: purple_red,
    purple: purple,
    red_black: red_black,
    red_purple: red_purple,
    red_white: red_white,
    red: red,
    white_red: white_red,
  };

  return (
    <div style={{ display: "inline-block" }}>
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
          style={{
            width: "3rem",
            height: "3rem",
            border:
              theme === attributes.colorTheme
                ? `3px black solid`
                : `3px transparent solid`,
          }}
        >
          <img
            src={`${window.ljsBlocks.pluginURL}${colorThemeThumbnails[theme]}`}
          />
        </div>
      </label>
    </div>
  );
};
