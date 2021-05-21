export default ({ fillColor, flipped = false }) => (
  <svg
    width="100%"
    viewBox="0 0 500 10"
    style={{ transform: flipped ? `rotate(180deg)` : `` }}
    className="relative z-20"
    id={flipped ? `slantedBorder` : `slantedBorder--flipped`}
  >
    <polygon points="0,10 500,10 500,0" fill={fillColor} />
  </svg>
);
