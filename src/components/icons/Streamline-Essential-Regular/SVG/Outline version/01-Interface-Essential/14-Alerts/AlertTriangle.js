import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 20.251c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125-.505 1.125-1.125 1.125zM12 16.501a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5c0 .413-.337.75-.75.75z" />,
    <path d="M2.272 24.001c-.347 0-.693-.081-1.003-.233-.543-.267-.951-.731-1.147-1.305s-.157-1.191.111-1.734L9.705 1.43A2.57 2.57 0 0110.872.263a2.527 2.527 0 011.124-.262c.984 0 1.865.547 2.298 1.429l9.473 19.298c.152.31.233.656.233 1.003 0 .607-.237 1.178-.667 1.606a2.254 2.254 0 01-1.604.664H2.272zm9.725-22.5a1.061 1.061 0 00-.945.59L1.579 21.39a.77.77 0 00.691 1.111h19.458a.768.768 0 00.773-.77.768.768 0 00-.079-.34l-9.475-19.3a1.064 1.064 0 00-.95-.59z" />
  );

export default SvgAlertTriangle;
