import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-image_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-actions-image_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <circle
      className="single-woman-actions-image_svg__cls-1"
      cx={15.625}
      cy={15.5}
      r={1.5}
    />,
    <path
      className="single-woman-actions-image_svg__cls-1"
      d="M23.5 21.25l-2.391-3.587a.75.75 0 00-1.239-.014l-2 2.851-1.236-.989a.751.751 0 00-1.093.17L13 23.5M10.682 9.692a5.466 5.466 0 003.408-.739.484.484 0 00.128-.721c-.408-.481-.692-1.119-.817-2.967C13.162 1.74 10.785.5 8.742.5s-4.42 1.24-4.658 4.765c-.125 1.847-.409 2.486-.817 2.967a.484.484 0 00.128.721 5.467 5.467 0 003.405.739"
    />,
    <path
      className="single-woman-actions-image_svg__cls-1"
      d="M10.682 9.692v-.647a.673.673 0 01.218-.5 2.056 2.056 0 00.752-1.745V4.864a4.843 4.843 0 01-2.91-1.685 4.838 4.838 0 01-2.909 1.685V6.8a2.056 2.056 0 00.752 1.742.673.673 0 01.218.5v1.309a.717.717 0 01-.467.666c-2.659.985-4.613 1.686-5.119 2.7A6.89 6.89 0 00.5 16.5h9"
    />
  );

export default SvgSingleWomanActionsImage;