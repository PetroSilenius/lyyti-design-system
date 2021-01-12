import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCopyPaste = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 23.998A2.252 2.252 0 010 21.748v-16.5a2.252 2.252 0 012.25-2.25h2.959l-.341-1.026a1.484 1.484 0 01.08-1.143c.178-.359.485-.626.865-.753.155-.052.306-.079.447-.079l.049.001h8.4c.401 0 .776.155 1.059.436a1.49 1.49 0 01.364 1.541l-.342 1.023h2.96A2.252 2.252 0 0121 5.248v3a.75.75 0 01-1.5 0v-3a.75.75 0 00-.75-.75h-3.46l-.158.474a1.5 1.5 0 01-1.423 1.026H7.291a1.5 1.5 0 01-1.423-1.025l-.159-.475H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm4.039-22.5l1.001 3h6.419l1-3h-8.42z" />,
    <path d="M12.75 23.998a2.252 2.252 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v9a2.252 2.252 0 01-2.25 2.25h-9zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9z" />,
    <path d="M14.25 14.998a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM14.25 17.998a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM14.25 20.998a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25z" />
  );

export default SvgCopyPaste;