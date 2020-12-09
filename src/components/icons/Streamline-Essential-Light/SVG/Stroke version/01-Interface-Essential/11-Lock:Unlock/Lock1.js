import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-1_svg__a" cx={12} cy={15} r={1} />,
    <path className="lock-1_svg__a" d="M12 16v3" />,
    <rect
      className="lock-1_svg__a"
      x={3.5}
      y={9.5}
      width={17}
      height={14}
      rx={1}
      ry={1}
    />,
    <path className="lock-1_svg__a" d="M6.5 6a5.5 5.5 0 0111 0v3.5h-11z" />
  );

export default SvgLock1;
