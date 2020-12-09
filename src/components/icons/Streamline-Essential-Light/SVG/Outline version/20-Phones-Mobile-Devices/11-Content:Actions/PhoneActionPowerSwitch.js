import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionPowerSwitch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={21.5} r={0.75} />,
    <path d="M7.5 24A2.503 2.503 0 015 21.5v-19C5 1.121 6.121 0 7.5 0h9C17.878 0 19 1.121 19 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-9zM6 21.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V20H6v1.5zM18 19V5H6v14h12zm0-15V2.5c0-.827-.673-1.5-1.5-1.5h-9C6.673 1 6 1.673 6 2.5V4h12z" />,
    <path d="M10.5 3a.5.5 0 010-1h3a.5.5 0 010 1h-3zM12 11.429a.5.5 0 01-.5-.5V7.5a.5.5 0 011 0v3.429a.5.5 0 01-.5.5z" />,
    <path d="M12 16.501a4.47 4.47 0 01-3.182-1.318A4.469 4.469 0 017.5 12.001a4.47 4.47 0 011.318-3.182.25.25 0 01.352 0l.354.353c.047.047.073.11.074.177s-.026.13-.073.177A3.479 3.479 0 008.5 12.001c0 .935.364 1.813 1.026 2.475A3.477 3.477 0 0012 15.501c.936 0 1.814-.364 2.475-1.025A3.481 3.481 0 0015.5 12c0-.935-.365-1.814-1.026-2.475a.5.5 0 11.708-.708A4.479 4.479 0 0116.5 12a4.47 4.47 0 01-1.318 3.182A4.468 4.468 0 0112 16.501z" />
  );

export default SvgPhoneActionPowerSwitch;
