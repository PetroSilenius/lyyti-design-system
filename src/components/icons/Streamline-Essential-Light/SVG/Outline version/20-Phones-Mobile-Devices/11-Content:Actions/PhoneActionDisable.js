import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={21.5} r={0.75} />,
    <path d="M7.5 24A2.503 2.503 0 015 21.5v-19C5 1.121 6.121 0 7.5 0h9C17.878 0 19 1.121 19 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-9zM6 21.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V20H6v1.5zM18 19V5H6v14h12zm0-15V2.5c0-.827-.673-1.5-1.5-1.5h-9C6.673 1 6 1.673 6 2.5V4h12z" />,
    <path d="M10.5 3a.5.5 0 010-1h3a.5.5 0 010 1h-3zM12 16a3.975 3.975 0 01-2.813-1.159c-.009-.008-.018-.016-.025-.025l-.008-.01A3.974 3.974 0 018 12c0-2.206 1.794-4 4-4a3.974 3.974 0 012.847 1.194A3.966 3.966 0 0116 12c0 2.206-1.794 4-4 4zm-1.736-1.557A2.995 2.995 0 0012 15c1.654 0 3-1.346 3-3 0-.623-.197-1.23-.558-1.736l-4.178 4.179zM12 9c-1.654 0-3 1.346-3 3 0 .622.196 1.229.557 1.736l4.178-4.179A2.99 2.99 0 0012 9z" />
  );

export default SvgPhoneActionDisable;
