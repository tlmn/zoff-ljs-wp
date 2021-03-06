import React from "react";

const FacebookIcon = ({ fillColor = "#252525" }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path
      d="M12.5 0C5.8725 0 0.5 5.3725 0.5 12C0.5 18.6275 5.8725 24 12.5 24C19.1275 24 24.5 18.6275 24.5 12C24.5 5.3725 19.1275 0 12.5 0ZM15.3425 8.2925H13.5388C13.325 8.2925 13.0875 8.57375 13.0875 8.9475V10.25H15.3438L15.0025 12.1075H13.0875V17.6838H10.9588V12.1075H9.0275V10.25H10.9588V9.1575C10.9588 7.59 12.0463 6.31625 13.5388 6.31625H15.3425V8.2925Z"
      fill={fillColor}
    />
  </svg>
);

export default FacebookIcon;
