import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-monitor_svg__cls-1"
      x={13.5}
      y={14.5}
      width={10}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-monitor_svg__cls-1"
      d="M18.5 21.5v2M15.5 23.5h6M10.5 15.5H.5a6 6 0 0111.659-2"
    />,
    <circle
      className="multiple-actions-monitor_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-monitor_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-monitor_svg__cls-1"
      d="M21.2 12.51a6 6 0 00-8.172-2.225"
    />
  );

export default SvgMultipleActionsMonitor;
