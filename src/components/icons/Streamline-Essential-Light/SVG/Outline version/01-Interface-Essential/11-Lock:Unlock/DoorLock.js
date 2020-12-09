import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDoorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.5 24.03c-.827 0-1.5-.673-1.5-1.5v-3a.5.5 0 011 0v3a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v2a.5.5 0 01-1 0v-2c0-.827.673-1.5 1.5-1.5h13c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-13z" />,
    <path d="M3.5 18.03c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5H4v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h.5c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-7zm0-8a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-7zm5.5-1v-1c0-1.103-.897-2-2-2s-2 .897-2 2v1h4z" />,
    <path d="M6.997 15.343c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75zm0-2.5a.75.75 0 100 1.5.75.75 0 000-1.5z" />
  );

export default SvgDoorLock;
