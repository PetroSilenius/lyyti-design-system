import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-address_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={2.25}
    />,
    <path
      className="single-woman-actions-address_svg__cls-1"
      d="M19.75 17.5v1.125a1.874 1.874 0 001.875 1.875 1.874 1.874 0 001.875-1.875v-.847a6.185 6.185 0 00-5.845-6.278 6 6 0 00-1.577 11.835 6.14 6.14 0 002.966-.038M2.547 4.577A4.637 4.637 0 006 2.974a4.637 4.637 0 003.453 1.6"
    />,
    <circle
      className="single-woman-actions-address_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-actions-address_svg__cls-1"
      d="M9.435 18.5h-.892l-1.054 5h-3l-1.054-5H.5l1.805-6.582a3.8 3.8 0 017.39 0l.16.586"
    />
  );

export default SvgSingleWomanActionsAddress;
