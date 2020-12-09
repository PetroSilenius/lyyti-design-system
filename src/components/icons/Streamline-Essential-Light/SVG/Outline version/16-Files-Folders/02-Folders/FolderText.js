import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 16a.5.5 0 01-.5-.5V3.786C1 2.801 1.801 2 2.786 2h3.432c.405 0 .799.167 1.08.459l1.341 1.387A.505.505 0 009 4h13a.5.5 0 010 1H9c-.405 0-.799-.167-1.08-.459L6.579 3.154A.505.505 0 006.218 3H2.786A.787.787 0 002 3.786V15.5a.5.5 0 01-.5.5z" />,
    <path d="M5.5 22c-.827 0-1.5-.673-1.5-1.5v-12C4 7.673 4.673 7 5.5 7h16c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-16zm0-14a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-16z" />,
    <path d="M7.5 12a.5.5 0 010-1h12a.5.5 0 010 1h-12zM7.5 15a.5.5 0 010-1h5a.5.5 0 010 1h-5zM7.5 18a.5.5 0 010-1h5a.5.5 0 010 1h-5zM16.5 19a.5.5 0 010-1h.5v-3h-1v.5a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1a.5.5 0 01-1 0V15h-1v3h.5a.5.5 0 010 1h-2z" />
  );

export default SvgFolderText;
