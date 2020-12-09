import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyNasty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-nasty_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-nasty_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-nasty_svg__a"
      d="M18.048 15A6.75 6.75 0 0112 18.75M5.25 8.25l4.5 2.25M18.75 8.25l-4.5 2.25"
    />
  );

export default SvgSmileyNasty;
