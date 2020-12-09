import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserCom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 21.5A2.503 2.503 0 010 19V5c0-1.379 1.121-2.5 2.5-2.5h19C22.878 2.5 24 3.621 24 5v14c0 1.378-1.122 2.5-2.5 2.5h-19zM1 19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V8.5H1V19zM23 7.5V5c0-.827-.673-1.5-1.5-1.5h-19C1.673 3.5 1 4.173 1 5v2.5h22z" />,
    <circle cx={4} cy={5.5} r={0.75} />,
    <circle cx={7} cy={5.5} r={0.75} />,
    <circle cx={10} cy={5.5} r={0.75} />,
    <circle cx={5} cy={16.5} r={0.75} />,
    <path d="M9.5 17.5A2.503 2.503 0 017 15v-1c0-1.378 1.121-2.5 2.5-2.5a.5.5 0 010 1c-.827 0-1.5.673-1.5 1.5v1c0 .827.673 1.5 1.5 1.5a.5.5 0 010 1zM12.5 17.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5zm0-5a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM18.5 17.5a.5.5 0 01-.5-.5v-3.195l-.571.952c-.088.147-.248.234-.429.234s-.341-.087-.429-.234L16 13.805V17a.5.5 0 01-1 0v-5a.502.502 0 01.5-.5c.175 0 .34.093.429.243L17 13.528l1.071-1.786a.502.502 0 01.562-.224c.216.06.367.258.367.482v5a.5.5 0 01-.5.5z" />
  );

export default SvgBrowserCom;
