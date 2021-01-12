import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.056 16c-.551 0-1-.448-1-1V9c0-.551.449-1 1-1h3c.551 0 1 .449 1 1v6c0 .552-.449 1-1 1h-3zm0-1h3V9h-3v6z" />,
    <path d="M1.556 18c-.827 0-1.5-.673-1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h18c.827 0 1.5.673 1.5 1.5V9h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5v1.5c0 .827-.673 1.5-1.5 1.5h-18zm0-11a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-2a.5.5 0 01.5-.5h2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 00-.5-.5h-18z" />
  );

export default SvgChargingBatteryLow;