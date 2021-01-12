import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="book-download_svg__a" d="M9.5 23.5h-6a2 2 0 01-2-2v-19" />,
    <path
      className="book-download_svg__a"
      d="M20.5.5h-17a2 2 0 000 4h16a1 1 0 011 1V9M3.504 2.5h16"
    />,
    <circle className="book-download_svg__a" cx={16.5} cy={17.5} r={6} />,
    <path
      className="book-download_svg__a"
      d="M16.5 14.5v6M16.5 20.5l-2.25-2.25M16.5 20.5l2.25-2.25"
    />
  );

export default SvgBookDownload;