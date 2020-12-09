import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.25 24c-.965 0-1.75-.785-1.75-1.75v-5.5c0-.88.653-1.611 1.5-1.732v-.768c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.768c.847.122 1.5.852 1.5 1.732v5.5c0 .965-.785 1.75-1.75 1.75h-7zm0-7.5a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-7zM21 15v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25L21 15z" />,
    <circle cx={18.75} cy={19.529} r={1.125} />,
    <path d="M3.75 7.5a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H3.75zM3.75 12a.75.75 0 010-1.5H12a.75.75 0 010 1.5H3.75zM3.75 16.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z" />,
    <path d="M2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V7.5a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h9a.75.75 0 010 1.5h-9z" />
  );

export default SvgCommonFileTextLock;
