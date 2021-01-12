import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyNauseous = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-nauseous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-nauseous_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-nauseous_svg__a"
      d="M16.5 11.25a.375.375 0 11.375-.375.375.375 0 01-.375.375M15.323 16.1a6.794 6.794 0 00-6.442 0M6.953 14.25a4.7 4.7 0 012.539 4.173M17.25 14.25a4.7 4.7 0 00-2.539 4.173M18.834 8.166a3.689 3.689 0 01-4.018-1.934M7.5 11.25a.375.375 0 10-.375-.375.375.375 0 00.375.375M5.166 8.166A3.54 3.54 0 007.5 7.875a3.539 3.539 0 001.683-1.643"
    />
  );

export default SvgSmileyNauseous;