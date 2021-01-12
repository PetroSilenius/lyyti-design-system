import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-news_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-news_svg__cls-1"
      cx={15}
      cy={7.875}
      r={2.625}
    />,
    <path
      className="single-neutral-news_svg__cls-1"
      d="M10.5 15.75a4.5 4.5 0 019 0"
    />,
    <rect
      className="single-neutral-news_svg__cls-1"
      x={1.5}
      y={2.25}
      width={21}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-news_svg__cls-1"
      d="M12 18.75v3M4.5 21.75h15M4.5 5.25H9v4.5H4.5z"
    />
  );

export default SvgSingleNeutralNews;