import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionNavigationPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={21.5} r={0.75} />,
    <path d="M7.5 24A2.503 2.503 0 015 21.5v-19C5 1.121 6.121 0 7.5 0h9C17.878 0 19 1.121 19 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-9zM6 21.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V20H6v1.5zM18 19V5H6v14h12zm0-15V2.5c0-.827-.673-1.5-1.5-1.5h-9C6.673 1 6 1.673 6 2.5V4h12z" />,
    <path d="M10.5 3a.5.5 0 010-1h3a.5.5 0 010 1h-3z" />,
    <circle cx={12} cy={10.5} r={0.75} />,
    <path d="M11.999 15.951a.987.987 0 01-.786-.383C9.975 13.985 8.5 11.821 8.5 10.5 8.5 8.57 10.07 7 12 7s3.5 1.57 3.5 3.5c0 1.318-1.475 3.483-2.712 5.067a.995.995 0 01-.789.384zM12 8a2.502 2.502 0 00-2.5 2.5c0 .773.958 2.479 2.5 4.451 1.542-1.974 2.5-3.679 2.5-4.451C14.5 9.121 13.378 8 12 8z" />
  );

export default SvgPhoneActionNavigationPin;
