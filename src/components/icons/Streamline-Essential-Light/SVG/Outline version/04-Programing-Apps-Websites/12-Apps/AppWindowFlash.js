import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16.529 24a.5.5 0 01-.5-.5V18h-2.125a.873.873 0 01-.668-1.44l5.903-7.373a.496.496 0 01.556-.159.5.5 0 01.334.472V15h2.125a.875.875 0 01.667 1.442l-5.902 7.371a.496.496 0 01-.39.187zm0-7a.5.5 0 01.5.5v4.576L21.894 16h-2.365a.5.5 0 01-.5-.5v-4.576L14.164 17h2.365z" />,
    <circle cx={4.529} cy={2.504} r={0.75} />,
    <path d="M6.529 3.254a.75.75 0 110-1.5.75.75 0 010 1.5zM8.529 3.254a.75.75 0 010-1.5c.012 0 .035.002.046.004a.747.747 0 01-.046 1.496z" />,
    <path d="M3.529 17a2.503 2.503 0 01-2.5-2.5v-12c0-1.379 1.121-2.5 2.5-2.5h16c1.378 0 2.5 1.121 2.5 2.5v6a.5.5 0 01-1 0V5.004h-19V14.5c0 .827.673 1.5 1.5 1.5h7a.5.5 0 010 1h-7zm17.5-12.996V2.5c0-.827-.673-1.5-1.5-1.5h-16c-.827 0-1.5.673-1.5 1.5v1.504h19z" />
  );

export default SvgAppWindowFlash;
