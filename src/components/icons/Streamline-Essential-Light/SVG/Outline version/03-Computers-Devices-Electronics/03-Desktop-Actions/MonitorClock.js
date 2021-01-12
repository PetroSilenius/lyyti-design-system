import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.5 18a.5.5 0 010-1H7c.551 0 1-.448 1-1v-1H1.5C.673 15 0 14.327 0 13.5v-12C0 .673.673 0 1.5 0h18c.827 0 1.5.673 1.5 1.5v8a.5.5 0 01-1 0v-8a.5.5 0 00-.5-.5h-18a.5.5 0 00-.5.5V11h10.5a.5.5 0 010 1H1v1.5a.5.5 0 00.5.5h8a.5.5 0 010 1H9v1c0 .357-.093.699-.268 1H9.5a.5.5 0 010 1h-4z" />,
    <path d="M17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z" />,
    <path d="M17.5 18a.5.5 0 01-.5-.5v-3a.5.5 0 011 0V17h1.5a.5.5 0 010 1h-2z" />
  );

export default SvgMonitorClock;