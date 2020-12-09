import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4.75} cy={3.5} r={0.75} />,
    <circle cx={8.25} cy={3.5} r={0.75} />,
    <circle cx={4.75} cy={9.5} r={0.75} />,
    <circle cx={8.25} cy={9.5} r={0.75} />,
    <path d="M2.5 19A2.503 2.503 0 010 16.5v-2c0-.798.376-1.532 1.003-2A2.488 2.488 0 010 10.5v-2c0-.798.376-1.532 1.003-2A2.488 2.488 0 010 4.5v-2C0 1.121 1.121 0 2.5 0h17C20.878 0 22 1.121 22 2.5v2c0 .798-.376 1.532-1.003 2A2.488 2.488 0 0122 8.5V10a.5.5 0 01-1 0V8.5c0-.827-.673-1.5-1.5-1.5h-17C1.673 7 1 7.673 1 8.5v2c0 .827.673 1.5 1.5 1.5h11a.5.5 0 010 1h-11c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5H12a.5.5 0 010 1H2.5zm0-18C1.673 1 1 1.673 1 2.5v2C1 5.327 1.673 6 2.5 6h17c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5h-17z" />,
    <circle cx={4.75} cy={15.5} r={0.75} />,
    <circle cx={8.25} cy={15.5} r={0.75} />,
    <path d="M15.5 24c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h.5v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h.5c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-7zm0-8a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-7zm5.5-1v-1c0-1.103-.897-2-2-2s-2 .897-2 2l4 1z" />,
    <path d="M19 21.313c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75zm0-2.5a.75.75 0 100 1.5.75.75 0 000-1.5z" />
  );

export default SvgServerLock;
