import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.75 24.004a2.252 2.252 0 01-2.25-2.25v-19.5A2.252 2.252 0 013.75.004h10.5a2.252 2.252 0 012.25 2.25V7.5a.75.75 0 01-1.5 0V2.254a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z" />,
    <path d="M5.625 13.129c-.62 0-1.125-.505-1.125-1.125 0-.573.425-1.05.992-1.117a.74.74 0 01.133-.012 1.127 1.127 0 010 2.254zM14.25 24.004a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121v-.879c0-2.068 1.682-3.75 3.75-3.75S21 12.186 21 14.254v.879a2.26 2.26 0 011.5 2.121v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zm5.25-1.5v-.75c0-1.241-1.009-2.25-2.25-2.25S15 13.013 15 14.254l4.5.75z" />,
    <circle cx={17.25} cy={19.504} r={1.125} />
  );

export default SvgLoginLock;
