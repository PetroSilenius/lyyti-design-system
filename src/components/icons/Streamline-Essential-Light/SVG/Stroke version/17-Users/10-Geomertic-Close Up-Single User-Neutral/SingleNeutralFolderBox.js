import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralFolderBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-folder-box_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-folder-box_svg__cls-1"
      d="M20.5 13.5v-8h-9.442A1.67 1.67 0 019.5 4.56 1.738 1.738 0 007.9 3.5H4a.5.5 0 00-.5.5v9.5M18.5 3.5h-6.456a1.739 1.739 0 01-1.574-1 1.741 1.741 0 00-1.57-1H5.5M.5 15.5l.839-4.2a1 1 0 01.981-.8H3.5M23.5 15.5l-.839-4.2a1 1 0 00-.981-.8H20.5"
    />,
    <circle
      className="single-neutral-folder-box_svg__cls-1"
      cx={12}
      cy={9.25}
      r={1.75}
    />,
    <path
      className="single-neutral-folder-box_svg__cls-1"
      d="M15.5 14.5a3.612 3.612 0 00-7 0zM18.5 15.5a1.5 1.5 0 00-1.5 1.54 1.512 1.512 0 01-1.559 1.46H8.558A1.512 1.512 0 017 17.04a1.5 1.5 0 00-1.5-1.54h-5v6a1 1 0 001 1h21a1 1 0 001-1v-6z"
    />
  );

export default SvgSingleNeutralFolderBox;
