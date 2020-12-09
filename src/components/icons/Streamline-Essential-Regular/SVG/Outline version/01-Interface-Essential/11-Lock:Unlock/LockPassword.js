import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockPassword = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.25 24A2.252 2.252 0 013 21.75v-10.5A2.252 2.252 0 015.25 9H6V6c0-3.308 2.692-6 6-6s6 2.692 6 6v3h.75A2.252 2.252 0 0121 11.25v10.5A2.252 2.252 0 0118.75 24H5.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H5.25zM16.5 9V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 007.5 6v3h9z" />,
    <circle cx={8.625} cy={14.625} r={1.125} />,
    <circle cx={12} cy={14.625} r={1.125} />,
    <circle cx={15.375} cy={14.625} r={1.125} />,
    <circle cx={8.625} cy={18.375} r={1.125} />,
    <circle cx={12} cy={18.375} r={1.125} />,
    <circle cx={15.375} cy={18.375} r={1.125} />
  );

export default SvgLockPassword;
