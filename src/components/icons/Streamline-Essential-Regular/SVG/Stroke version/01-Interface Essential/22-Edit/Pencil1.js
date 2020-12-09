import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencil1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pencil-1_svg__a"
      d="M22.19 1.81a3.638 3.638 0 00-5.169.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.638 3.638 0 00.035-5.169zM16.606 2.26l5.134 5.134M14.512 4.354l5.134 5.134M2.521 16.345l5.139 5.129"
    />
  );

export default SvgPencil1;
