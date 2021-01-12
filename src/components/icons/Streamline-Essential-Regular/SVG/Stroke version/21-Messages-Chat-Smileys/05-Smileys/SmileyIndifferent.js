import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyIndifferent = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-indifferent_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-indifferent_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-indifferent_svg__a"
      d="M8.25 8.625A.375.375 0 117.875 9a.375.375 0 01.375-.375M15.75 8.625a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.5 15.75h9"
    />
  );

export default SvgSmileyIndifferent;