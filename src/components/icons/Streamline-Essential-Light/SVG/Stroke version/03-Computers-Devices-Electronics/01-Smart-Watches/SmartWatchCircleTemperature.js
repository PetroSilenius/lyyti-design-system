import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleTemperature = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-temperature_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-temperature_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-temperature_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <circle
      className="smart-watch-circle-temperature_svg__a"
      cx={9}
      cy={9}
      r={1.5}
    />,
    <path
      className="smart-watch-circle-temperature_svg__a"
      d="M14.5 16.5a3 3 0 010-6"
    />
  );

export default SvgSmartWatchCircleTemperature;
