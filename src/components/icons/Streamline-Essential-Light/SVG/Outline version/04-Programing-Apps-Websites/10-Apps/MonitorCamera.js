import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.5 13.5c-.827 0-1.5-.673-1.5-1.5V7c0-.827.673-1.5 1.5-1.5h6c.799 0 1.455.628 1.498 1.417l1.362-.397a.508.508 0 01.44.08c.125.094.2.243.2.4v5a.503.503 0 01-.5.5.526.526 0 01-.157-.025L16 12.027a1.502 1.502 0 01-1.5 1.473h-6zm0-7A.5.5 0 008 7v5a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-.667a.503.503 0 01.5-.5c.054 0 .107.009.158.026l1.342.447v-3.64l-1.36.396a.499.499 0 01-.64-.479V7a.5.5 0 00-.5-.5h-6z" />,
    <path d="M5 22.504a.5.5 0 010-1h6v-1H2c-1.103 0-2-.897-2-2v-15c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v15c0 1.103-.897 2-2 2H12v1h7a.5.5 0 010 1H5zm-4-4c0 .552.449 1 1 1h20a1 1 0 001-1v-2H1v2zm22-3v-12c0-.551-.448-1-1-1H2c-.551 0-1 .449-1 1v12h22z" />
  );

export default SvgMonitorCamera;
