import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-add_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-add_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-add_svg__cls-1"
      d="M10.568 10.91a5.279 5.279 0 00-1.682-1.8L6 13.5 3.115 9.114A5.244 5.244 0 00.75 13.5v2.25H3l.75 7.5h4.5l.358-3.573M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />,
    <circle
      className="single-woman-actions-add_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="single-woman-actions-add_svg__cls-1"
      d="M17.25 14.25v6M14.25 17.25h6"
    />
  );

export default SvgSingleWomanActionsAdd;
