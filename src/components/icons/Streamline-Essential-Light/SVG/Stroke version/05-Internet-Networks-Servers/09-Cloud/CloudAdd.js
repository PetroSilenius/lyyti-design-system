import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-add_svg__a"
      d="M20.5 13.906A4.311 4.311 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3"
    />,
    <circle className="cloud-add_svg__a" cx={12} cy={16.5} r={6} />,
    <path className="cloud-add_svg__a" d="M12 13.5v6M15 16.5H9" />
  );

export default SvgCloudAdd;
