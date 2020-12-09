import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 19.504c-.827 0-1.5-.673-1.5-1.5v-12c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-21zm0-14a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-21z" />,
    <path d="M11 15.504a.5.5 0 010-1h.5v-5H11a.5.5 0 010-1h2a.5.5 0 010 1h-.5v5h.5a.5.5 0 010 1h-2zM6 15.5a.5.5 0 01-.5-.5V9a.5.5 0 01.5-.5h1.5c1.103 0 2 .897 2 2 0 .575-.255 1.123-.682 1.5.427.376.682.925.682 1.5 0 1.103-.897 2-2 2H6zm1.5-1a1.001 1.001 0 000-2h-1v2h1zm0-3c.551 0 1-.449 1-1s-.449-1-1-1h-1v2h1zM18 15.504a.496.496 0 01-.447-.277L15.5 11.122v3.882a.5.5 0 01-1 0v-6a.499.499 0 01.947-.223l2.053 4.105V9.004a.5.5 0 011 0v6a.499.499 0 01-.5.5z" />
  );

export default SvgBin;
