import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-question_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-woman-actions-question_svg__cls-1"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25M12.6 9.1a5.515 5.515 0 01-.8-3.054V4.8a4.3 4.3 0 10-8.593 0v1.245A5.515 5.515 0 012.4 9.1"
    />,
    <path
      className="single-woman-actions-question_svg__cls-1"
      d="M3.205 5.505A5.688 5.688 0 007.5 3.536a5.684 5.684 0 004.3 1.969M11.288 5.483a3.791 3.791 0 01-7.573 0M8.5 17.5h-8a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleWomanActionsQuestion;
