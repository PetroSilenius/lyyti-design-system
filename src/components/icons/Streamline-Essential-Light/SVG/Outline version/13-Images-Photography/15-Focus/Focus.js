import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.5 18.482a.498.498 0 01-.317-.887A7.708 7.708 0 0020 11.961a7.666 7.666 0 00-2.817-5.592.499.499 0 11.632-.774 8.686 8.686 0 013.183 6.367 8.737 8.737 0 01-3.183 6.408.499.499 0 01-.315.112zM6.5 18.482a.499.499 0 01-.316-.113A8.707 8.707 0 013 12.003a8.714 8.714 0 013.183-6.408.502.502 0 01.815.437.496.496 0 01-.182.337A7.687 7.687 0 004 12.003a7.682 7.682 0 002.817 5.592.501.501 0 01-.317.887zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6A2.502 2.502 0 009.5 12c0 1.378 1.121 2.5 2.5 2.5 1.378 0 2.5-1.122 2.5-2.5 0-1.379-1.122-2.5-2.5-2.5z" />,
    <path d="M2.5 23A2.503 2.503 0 010 20.5v-17C0 2.121 1.121 1 2.5 1h19C22.878 1 24 2.121 24 3.5v17c0 1.378-1.122 2.5-2.5 2.5h-19zm0-21C1.673 2 1 2.673 1 3.5v17c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5h-19z" />
  );

export default SvgFocus;
