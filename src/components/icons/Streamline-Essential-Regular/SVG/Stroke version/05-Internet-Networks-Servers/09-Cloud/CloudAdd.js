import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-add_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="cloud-add_svg__a"
      d="M17.25 14.25v6M14.25 17.25h6M23.1 9.659a4.868 4.868 0 00-7.486-2.794A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudAdd;
