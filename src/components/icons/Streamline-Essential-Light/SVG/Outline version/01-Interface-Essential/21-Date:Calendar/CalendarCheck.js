import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24.001c-.827 0-1.5-.673-1.5-1.5v-19c0-.827.673-1.5 1.5-1.5H5v-1.5a.5.5 0 011 0v1.5h12v-1.5a.5.5 0 011 0v1.5h3.5c.827 0 1.5.673 1.5 1.5v19c0 .827-.673 1.5-1.5 1.5h-21zm-.5-1.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-14.5H1v14.5zm22-15.5v-3.5a.5.5 0 00-.5-.5H19v2.5a.5.5 0 01-1 0v-2.5H6v2.5a.5.5 0 01-1 0v-2.5H1.5a.5.5 0 00-.5.5v3.5h22z" />,
    <path d="M12 21c-3.033 0-5.5-2.467-5.5-5.5S8.967 10 12 10a.5.5 0 010 1c-2.481 0-4.5 2.019-4.5 4.5S9.519 20 12 20s4.5-2.019 4.5-4.5a.5.5 0 011 0c0 3.033-2.467 5.5-5.5 5.5z" />,
    <path d="M11.919 16.815a.993.993 0 01-.599-.199L9.7 15.4a.496.496 0 01-.1-.7.504.504 0 01.7-.1l1.62 1.215 4.696-5.635a.499.499 0 11.768.64l-4.696 5.635a.998.998 0 01-.769.36z" />
  );

export default SvgCalendarCheck;
