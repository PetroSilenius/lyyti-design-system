import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-bullets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-bullets_svg__a"
      x={8.25}
      y={0.747}
      width={15}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-bullets_svg__a"
      x={8.25}
      y={9.747}
      width={15}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-bullets_svg__a"
      x={8.25}
      y={18.747}
      width={15}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-bullets_svg__a"
      x={0.75}
      y={0.747}
      width={4.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-bullets_svg__a"
      x={0.75}
      y={9.747}
      width={4.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-bullets_svg__a"
      x={0.75}
      y={18.747}
      width={4.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgLayoutBullets;
