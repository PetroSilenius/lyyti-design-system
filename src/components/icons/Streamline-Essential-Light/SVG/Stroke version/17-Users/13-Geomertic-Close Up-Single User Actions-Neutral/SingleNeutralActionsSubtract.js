import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-subtract_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-subtract_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-neutral-actions-subtract_svg__cls-1"
      d="M20.5 17.5h-6"
    />,
    <circle
      className="single-neutral-actions-subtract_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-subtract_svg__cls-1"
      d="M8.5 17.5h-8a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleNeutralActionsSubtract;