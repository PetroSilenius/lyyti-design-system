import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-flash_svg__cls-1"
      d="M20.5 10.443a.25.25 0 00-.445-.156l-5.466 6.826a.375.375 0 00.286.618H17.5v5.288a.25.25 0 00.445.156l5.466-6.826a.376.376 0 00-.286-.618H20.5zM12.5 16.731H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.731v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l4.391 1.882c.044.019.086.038.126.059"
    />
  );

export default SvgSingleManActionsFlash;
