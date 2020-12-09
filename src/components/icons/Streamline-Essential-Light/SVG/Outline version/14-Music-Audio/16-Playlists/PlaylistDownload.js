import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 19C.673 19 0 18.327 0 17.5v-16C0 .673.673 0 1.5 0h16c.827 0 1.5.673 1.5 1.5v10a.5.5 0 01-1 0v-10a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h10a.5.5 0 010 1h-10z" />,
    <path d="M5 15c-1.103 0-2-.897-2-2a2.002 2.002 0 013-1.732V7.254c0-.666.448-1.259 1.088-1.442l5-1.429A1.506 1.506 0 0114 5.826V12c0 1.103-.897 2-2 2s-2-.897-2-2a2.002 2.002 0 013-1.732V5.826a.503.503 0 00-.637-.482l-5 1.429A.503.503 0 007 7.254V13c0 1.103-.897 2-2 2zm0-3a1.001 1.001 0 000 2 1.001 1.001 0 000-2zm7-1a1.001 1.001 0 101 1c0-.551-.448-1-1-1zM18.5 24c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zm0-10c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z" />,
    <path d="M18.5 21a.483.483 0 01-.191-.039.477.477 0 01-.163-.109l-1.999-1.999a.5.5 0 11.707-.707L18 19.293V16.5a.5.5 0 011 0v2.793l1.146-1.146a.5.5 0 11.708.707l-2 2A.496.496 0 0118.5 21z" />
  );

export default SvgPlaylistDownload;
