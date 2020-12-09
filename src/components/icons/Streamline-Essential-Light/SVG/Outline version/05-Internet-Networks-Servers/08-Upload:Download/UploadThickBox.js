import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadThickBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.516 21.5a.5.5 0 01-.5-.5v-5.5h-2.5a.5.5 0 01-.355-.852l6.468-6.5a.498.498 0 01.708-.002l6.5 6.5a.498.498 0 01-.354.853h-2.468V21a.5.5 0 01-.5.5H8.516zm6.5-1V15a.5.5 0 01.5-.5h1.761l-5.292-5.292L6.719 14.5h1.797a.5.5 0 01.5.5v5.5h6z" />,
    <path d="M2 24c-.827 0-1.5-.673-1.5-1.5v-16c.005-.165.016-.331.034-.499V6A6.742 6.742 0 01.9 4.401l1.264-3.159A2.107 2.107 0 013.973.001L20 0a2.108 2.108 0 011.825 1.219l1.268 3.168A6.67 6.67 0 0123.466 6v.001c.018.17.029.328.033.484v16.016c0 .827-.673 1.5-1.5 1.5H2zm-.5-1.5a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-16h-21v16zm20.873-17a5.55 5.55 0 00-.213-.754l-1.253-3.133A1.085 1.085 0 0019.98 1H12.5v4.5h9.873zM11.5 5.5V1H4a1.086 1.086 0 00-.917.637l-1.248 3.12a5.58 5.58 0 00-.208.743H11.5z" />
  );

export default SvgUploadThickBox;
