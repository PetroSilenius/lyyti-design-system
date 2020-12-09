import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWatchTime = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20 12a8.005 8.005 0 00-4-6.926V1.5A1.5 1.5 0 0014.5 0h-5A1.5 1.5 0 008 1.5v3.575a8 8 0 000 13.852V22.5A1.5 1.5 0 009.5 24h5a1.5 1.5 0 001.5-1.5v-3.573A8.006 8.006 0 0020 12zm-8 6a6 6 0 116-6 6.007 6.007 0 01-6 6z" />,
    <path d="M12.75 11.69V9a.75.75 0 10-1.5 0v3a.749.749 0 00.22.53l2.5 2.5a.77.77 0 001.06 0 .749.749 0 000-1.06z" />
  );

export default SvgWatchTime;
