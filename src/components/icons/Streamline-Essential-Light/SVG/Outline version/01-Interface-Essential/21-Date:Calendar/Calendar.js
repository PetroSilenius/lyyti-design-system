import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24.001c-.827 0-1.5-.673-1.5-1.5v-19c0-.827.673-1.5 1.5-1.5H5v-1.5a.5.5 0 011 0v1.5h12v-1.5a.5.5 0 011 0v1.5h3.5c.827 0 1.5.673 1.5 1.5v19c0 .827-.673 1.5-1.5 1.5h-21zm-.5-1.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-14.5H1v14.5zm22-15.5v-3.5a.5.5 0 00-.5-.5H19v2.5a.5.5 0 01-1 0v-2.5H6v2.5a.5.5 0 01-1 0v-2.5H1.5a.5.5 0 00-.5.5v3.5h22z" />
  );

export default SvgCalendar;
