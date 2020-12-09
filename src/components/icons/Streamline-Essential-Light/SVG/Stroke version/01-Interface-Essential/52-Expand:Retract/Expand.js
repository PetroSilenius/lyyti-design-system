import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand_svg__a"
      d="M16.5 4.5h6a1 1 0 011 1v4M7.5 4.5h-6a1 1 0 00-1 1v4M16.5 19.5h6a1 1 0 001-1v-4M7.5 19.5h-6a1 1 0 01-1-1v-4"
    />,
    <rect
      className="expand_svg__a"
      x={4.5}
      y={8.499}
      width={15}
      height={7}
      rx={1}
      ry={1}
    />
  );

export default SvgExpand;
