import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.998c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />,
    <path d="M12 15.498c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6a2.502 2.502 0 00-2.5 2.5c0 1.378 1.121 2.5 2.5 2.5 1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5zM4.929 13.912a.5.5 0 01-.354-.146l-1.414-1.414a.5.5 0 010-.707l1.414-1.414a.5.5 0 11.708.707l-1.06 1.061 1.06 1.061a.5.5 0 01-.354.852zM12 20.983a.5.5 0 01-.354-.146l-1.414-1.414a.5.5 0 11.708-.708L12 19.776l1.061-1.061a.5.5 0 11.708.708l-1.414 1.414a.503.503 0 01-.355.146zM13.414 5.427a.5.5 0 01-.354-.146L12 4.22l-1.06 1.06a.5.5 0 11-.708-.707l1.414-1.414a.5.5 0 01.708 0l1.414 1.414a.5.5 0 01-.354.854zM19.071 13.912a.5.5 0 01-.354-.853l1.061-1.061-1.061-1.061a.5.5 0 01.708-.707l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.496.496 0 01-.354.147z" />
  );

export default SvgCursorMoveDirection;