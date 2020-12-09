import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPenWritePaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pen-write-paper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pen-write-paper_svg__a"
      d="M8.492 11.265l-1.06 4.243 4.242-1.061 6.364-6.364-3.182-3.182-6.364 6.364zM21.751 4.371l1.06 1.06a1.5 1.5 0 010 2.122l-3.311 3.31"
    />,
    <path
      className="pen-write-paper_svg__a"
      d="M18.038 8.083l3.713-3.712a1.5 1.5 0 000-2.122l-1.061-1.06a1.5 1.5 0 00-2.121 0L14.856 4.9"
    />,
    <path
      className="pen-write-paper_svg__a"
      d="M20.251 13.5v3.128a1.5 1.5 0 01-.44 1.061L14.69 22.81a1.5 1.5 0 01-1.061.44H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5H13.5"
    />,
    <path
      className="pen-write-paper_svg__a"
      d="M14.251 23.115V18.75a1.5 1.5 0 011.5-1.5h4.365"
    />
  );

export default SvgPenWritePaper;
