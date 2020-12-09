import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.499 23a.5.5 0 010-1h1.249a6.455 6.455 0 001.201-3H1.5C.673 19 0 18.327 0 17.5v-15C0 1.673.673 1 1.5 1h21c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5h-8.449a6.459 6.459 0 001.201 3h1.247a.5.5 0 010 1h-9zm6.552-1a7.471 7.471 0 01-1.007-3h-2.087a7.487 7.487 0 01-1.007 3h4.101zM1 17.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V16H1v1.5zM23 15V2.5a.5.5 0 00-.5-.5h-21a.5.5 0 00-.5.5V15h22z" />
  );

export default SvgMonitor;
