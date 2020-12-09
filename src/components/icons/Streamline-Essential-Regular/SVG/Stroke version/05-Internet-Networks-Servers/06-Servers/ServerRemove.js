import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-remove_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-remove_svg__a"
      d="M12.751 9.75h-7.5a4.5 4.5 0 010-9h12a4.5 4.5 0 012.458 8.27M8.251 18.75h-3a4.5 4.5 0 010-9M10.501 5.25h6.75"
    />,
    <circle className="server-remove_svg__a" cx={17.251} cy={17.25} r={6} />,
    <path
      className="server-remove_svg__a"
      d="M19.501 14.999l-4.5 4.5M15.001 14.999l4.5 4.5"
    />
  );

export default SvgServerRemove;
