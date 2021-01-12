import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.5 23.999a.5.5 0 01-.354-.146L12 12.706.854 23.853a.5.5 0 11-.708-.707L11.292 12 .147.853A.5.5 0 01.854.145L12 11.292 23.147.146a.5.5 0 11.708.707L12.707 11.999l11.146 11.146a.5.5 0 01-.353.854z" />
  );

export default SvgClose;