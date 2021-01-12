import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 16a4.505 4.505 0 004.5-4.5v-7a4.5 4.5 0 00-9 0v7A4.505 4.505 0 0012 16z" />,
    <path d="M19 8a1 1 0 00-1 1v2.5a6 6 0 01-12 0V9a1 1 0 00-2 0v2.5a8.013 8.013 0 006.788 7.908.25.25 0 01.212.247V23a1 1 0 002 0v-3.345a.25.25 0 01.212-.247A8.013 8.013 0 0020 11.5V9a1 1 0 00-1-1z" />
  );

export default SvgMicrophone;