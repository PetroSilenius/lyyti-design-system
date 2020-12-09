import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-block_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-block_svg__a"
      d="M9 19.188a1.5 1.5 0 01-2.121 0L1.5 13.81a1.5 1.5 0 010-2.122L12 1.188a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379a1.5 1.5 0 01-.439 1.06"
    />,
    <path
      className="tags-block_svg__a"
      d="M16.189 4.124a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle className="tags-block_svg__a" cx={16.939} cy={17.249} r={6} />,
    <path className="tags-block_svg__a" d="M21.182 13.006l-8.484 8.485" />
  );

export default SvgTagsBlock;
