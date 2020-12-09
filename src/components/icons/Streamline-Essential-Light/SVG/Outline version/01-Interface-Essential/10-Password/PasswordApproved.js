import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={10.75} cy={11} r={0.75} />,
    <circle cx={6} cy={11} r={0.75} />,
    <path d="M17.5 24a6.508 6.508 0 01-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.467-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z" />,
    <path d="M16.667 20.428a1.24 1.24 0 01-.882-.365l-1.5-1.5a.5.5 0 01.708-.707l1.5 1.5a.244.244 0 00.176.072.249.249 0 00.202-.1l2.905-3.872a.501.501 0 01.8.6l-2.905 3.872c-.237.314-.612.5-1.004.5zM2.5 16A2.503 2.503 0 010 13.5v-5C0 7.121 1.121 6 2.5 6h19C22.878 6 24 7.121 24 8.5V12a.5.5 0 01-1 0V8.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 7 1 7.673 1 8.5v5c0 .827.673 1.5 1.5 1.5h7a.5.5 0 010 1h-7z" />
  );

export default SvgPasswordApproved;
