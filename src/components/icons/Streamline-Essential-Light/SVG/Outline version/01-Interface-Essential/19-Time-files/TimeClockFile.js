import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h13.293c.401 0 .777.156 1.061.439l3.707 3.707c.283.284.439.661.439 1.061V8.5a.5.5 0 01-1 0V5.207a.501.501 0 00-.146-.354l-3.707-3.707A.505.505 0 0014.793 1H1.5a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h9a.5.5 0 010 1h-9z" />,
    <path d="M17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z" />,
    <path d="M17.5 18a.5.5 0 01-.5-.5v-3a.5.5 0 011 0V17h1.5a.5.5 0 010 1h-2z" />
  );

export default SvgTimeClockFile;
