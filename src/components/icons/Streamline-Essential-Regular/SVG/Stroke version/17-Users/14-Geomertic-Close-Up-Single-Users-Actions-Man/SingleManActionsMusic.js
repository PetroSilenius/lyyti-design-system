import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-music_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="single-man-actions-music_svg__cls-1"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.025-1.423l4.5-1.25a1.5 1.5 0 011.975 1.423v5.794M.75 17.25a6.75 6.75 0 0111.787-4.494M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />
  );

export default SvgSingleManActionsMusic;
