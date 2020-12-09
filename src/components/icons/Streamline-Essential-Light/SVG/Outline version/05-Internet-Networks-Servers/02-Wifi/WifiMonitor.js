import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7 22a.5.5 0 010-1h3v-2H1.5C.673 19 0 18.327 0 17.5v-14C0 2.673.673 2 1.5 2h21c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5H14v2h3a.5.5 0 010 1H7zm6-1v-2h-2v2h2zM1.5 3a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-21z" />,
    <path d="M12 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 000 2 1 1 0 000-2zM15.326 11.119a.494.494 0 01-.302-.102 5.025 5.025 0 00-6.048 0 .494.494 0 01-.7-.096.496.496 0 01.096-.7C9.405 9.436 10.693 9.004 12 9.004s2.595.432 3.628 1.217a.498.498 0 01.096.7.495.495 0 01-.398.198zM6 8a.504.504 0 01-.495-.571A.496.496 0 015.7 7.1a10.558 10.558 0 0112.6 0 .496.496 0 01.1.7.504.504 0 01-.7.1 9.554 9.554 0 00-11.4 0A.499.499 0 016 8z" />
  );

export default SvgWifiMonitor;
