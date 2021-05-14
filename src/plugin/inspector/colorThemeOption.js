export default ({ theme, ...props }) => {
  const { attributes, setAttributes } = props;
  return (
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
};
