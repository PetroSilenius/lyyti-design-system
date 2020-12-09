import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-information_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-information_svg__cls-1"
      d="M10.232 12.382A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1"
    />,
    <circle
      className="single-neutral-actions-information_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="single-neutral-actions-information_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-neutral-actions-information_svg__cls-1"
      d="M17.5 20.5V17a.5.5 0 00-.5-.5h-1M16.75 14a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 20.5h3"
    />
  );

export default SvgSingleNeutralActionsInformation;
