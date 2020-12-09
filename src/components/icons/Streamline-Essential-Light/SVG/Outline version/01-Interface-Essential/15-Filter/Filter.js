import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.519 24c-.827 0-1.5-.673-1.5-1.5v-5.793L3.58 10.268a6.11 6.11 0 01-1.561-3.741V4.001c.002-2.281 4.301-4 10-4s9.998 1.719 10 3.998V6.5a6.135 6.135 0 01-1.207 3.331 5.941 5.941 0 01.722 7.358 5.98 5.98 0 01-5.071 2.777c-.84 0-1.677-.18-2.444-.524V22.5c0 .827-.673 1.5-1.5 1.5h-1zm-8.5-17.5a5.049 5.049 0 001.287 3.081l6.566 6.565a.513.513 0 01.147.354v6a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-6c0-.066.013-.13.039-.191a.477.477 0 01.109-.163l6.585-6.585a5.054 5.054 0 001.268-3.087v-.675C19.398 7.15 15.981 8 12.02 8c-3.961 0-7.378-.85-9-2.201V6.5zm10.999 11.818a4.976 4.976 0 003.537.53 4.97 4.97 0 003.134-2.196 4.952 4.952 0 00-.546-6.071l-6.126 6.126v1.611zM12.019 1.001c-5.304 0-9 1.581-9 3s3.696 3 9 3 9-1.581 9-3-3.697-3-9-3z" />
  );

export default SvgFilter;
