import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldGlobe = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-globe_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-globe_svg__a"
      d="M2.25 3.923v7.614A11.907 11.907 0 009.882 22.65l1.041.4a3 3 0 002.154 0l1.041-.4a11.907 11.907 0 007.632-11.113V3.923a1.487 1.487 0 00-.868-1.362A21.7 21.7 0 0012 .75a21.7 21.7 0 00-8.882 1.811 1.487 1.487 0 00-.868 1.362z"
    />,
    <circle className="shield-globe_svg__a" cx={12} cy={11.25} r={6} />,
    <path
      className="shield-globe_svg__a"
      d="M12 5.25q4.5 6 0 12M12 5.25q-4.5 6 0 12M6 11.25h12"
    />
  );

export default SvgShieldGlobe;
