import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 21.504a2.503 2.503 0 01-2.5-2.5v-14c0-1.379 1.121-2.5 2.5-2.5h19c1.378 0 2.5 1.121 2.5 2.5v14c0 1.378-1.122 2.5-2.5 2.5h-19zm-1.5-2.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-10.5H1v10.5zm22-11.5v-2.5c0-.827-.673-1.5-1.5-1.5h-19c-.827 0-1.5.673-1.5 1.5v2.5h22z" />,
    <circle cx={4} cy={5.504} r={0.75} />,
    <circle cx={7} cy={5.504} r={0.75} />,
    <circle cx={10} cy={5.504} r={0.75} />,
    <path d="M11.5 19.504a.5.5 0 01-.5-.5V10.5H8V12a.5.5 0 01-1 0v-1.5c0-.551.449-1 1-1h7c.552 0 1 .449 1 1V12a.5.5 0 01-1 0v-1.5h-3v8.504a.5.5 0 01-.5.5z" />
  );

export default SvgAppWindowType;
