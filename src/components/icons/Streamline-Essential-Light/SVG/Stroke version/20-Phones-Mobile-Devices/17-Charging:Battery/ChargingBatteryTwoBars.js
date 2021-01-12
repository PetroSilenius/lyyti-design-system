import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryTwoBars = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-two-bars_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-two-bars_svg__a"
      d="M6.5 15.5H3a.5.5 0 01-.5-.5V9a.5.5 0 01.5-.5h3.5zM10.5 15a.5.5 0 01-.5.5H6.5v-7H10a.5.5 0 01.5.5z"
    />,
    <path
      className="charging-battery-two-bars_svg__a"
      d="M20.5 9.5v-2a1 1 0 00-1-1h-18a1 1 0 00-1 1v9a1 1 0 001 1h18a1 1 0 001-1v-2h2a1 1 0 001-1v-3a1 1 0 00-1-1z"
    />
  );

export default SvgChargingBatteryTwoBars;