import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4.75} cy={3.5} r={0.75} />,
    <circle cx={8.25} cy={3.5} r={0.75} />,
    <circle cx={4.75} cy={9.5} r={0.75} />,
    <circle cx={8.25} cy={9.5} r={0.75} />,
    <path d="M2.5 19A2.503 2.503 0 010 16.5v-2c0-.798.376-1.532 1.003-2A2.488 2.488 0 010 10.5v-2c0-.798.376-1.532 1.003-2A2.488 2.488 0 010 4.5v-2C0 1.121 1.121 0 2.5 0h17C20.878 0 22 1.121 22 2.5v2c0 .798-.376 1.532-1.003 2A2.488 2.488 0 0122 8.5V10a.5.5 0 01-1 0V8.5c0-.827-.673-1.5-1.5-1.5h-17C1.673 7 1 7.673 1 8.5v2c0 .827.673 1.5 1.5 1.5h8a.5.5 0 010 1h-8c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5H9a.5.5 0 010 1H2.5zm0-18C1.673 1 1 1.673 1 2.5v2C1 5.327 1.673 6 2.5 6h17c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5h-17z" />,
    <circle cx={4.75} cy={15.5} r={0.75} />,
    <circle cx={8.25} cy={15.5} r={0.75} />,
    <path d="M17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z" />,
    <path d="M17.5 18a.5.5 0 01-.5-.5v-3a.5.5 0 011 0V17h1.5a.5.5 0 010 1h-2z" />
  );

export default SvgServerClock;
