import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M17.861 23.123a.5.5 0 01-.722 0l-4.753-4.958a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
      id="single-man-actions-heart_svg__New_Symbol_8"
      data-name="New Symbol 8"
    />,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M8.5 17.5h-8a7 7 0 0110-6.326M3.838 2.592A7.049 7.049 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-heart_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsHeart;
