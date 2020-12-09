import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.751 23.999a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121v-.879c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.879a2.26 2.26 0 011.5 2.121v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zm5.25-1.5v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25l4.5.75z" />,
    <circle cx={18.751} cy={19.529} r={1.125} />,
    <path d="M8.243 16.499A8.254 8.254 0 01.136 9.772C-.704 5.301 2.25.981 6.72.141a8.195 8.195 0 016.18 1.298 8.234 8.234 0 013.202 4.295 5.632 5.632 0 012.293-.487 5.61 5.61 0 012.853.786 5.58 5.58 0 012.58 3.439.743.743 0 01-.081.568.743.743 0 01-.645.367.75.75 0 01-.727-.563 4.09 4.09 0 00-1.891-2.521 4.106 4.106 0 00-4.442.158.754.754 0 01-1.164-.478 6.706 6.706 0 00-2.824-4.326 6.699 6.699 0 00-5.057-1.062 6.757 6.757 0 00-5.387 7.88 6.753 6.753 0 006.634 5.503h3.007a.75.75 0 010 1.5H8.243z" />
  );

export default SvgCloudLock;
