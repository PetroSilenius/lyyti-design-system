import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAttachment = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M23.25 9.9L12.273 20.878a6.75 6.75 0 01-9.546-9.546l9.016-9.015a4.5 4.5 0 116.363 6.363L9.091 17.7a2.25 2.25 0 01-3.182-3.181L14.925 5.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgAttachment;
