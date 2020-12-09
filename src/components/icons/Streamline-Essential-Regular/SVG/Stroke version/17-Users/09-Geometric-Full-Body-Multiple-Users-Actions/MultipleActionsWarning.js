import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M17.25 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M23.063 20.682a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.586-2.568l4.226-8.452a1.774 1.774 0 013.173 0z"
    />,
    <circle
      className="multiple-actions-warning_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M11.25 14.25v-.75a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.387-3.862"
    />,
    <circle
      className="multiple-actions-warning_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsWarning;
