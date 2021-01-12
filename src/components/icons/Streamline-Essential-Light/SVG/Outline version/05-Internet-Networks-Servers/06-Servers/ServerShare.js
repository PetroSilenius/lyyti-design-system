import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4.75} cy={3.5} r={0.75} />,
    <circle cx={8.25} cy={3.5} r={0.75} />,
    <circle cx={4.75} cy={9.5} r={0.75} />,
    <circle cx={8.25} cy={9.5} r={0.75} />,
    <path d="M2.5 19A2.503 2.503 0 010 16.5v-2c0-.798.376-1.532 1.003-2A2.488 2.488 0 010 10.5v-2c0-.798.376-1.532 1.003-2A2.488 2.488 0 010 4.5v-2C0 1.121 1.121 0 2.5 0h17C20.878 0 22 1.121 22 2.5v2c0 .798-.376 1.532-1.003 2A2.488 2.488 0 0122 8.5V10a.5.5 0 01-1 0V8.5c0-.827-.673-1.5-1.5-1.5h-17C1.673 7 1 7.673 1 8.5v2c0 .827.673 1.5 1.5 1.5h13a.5.5 0 010 1h-13c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5H9a.5.5 0 010 1H2.5zm0-18C1.673 1 1 1.673 1 2.5v2C1 5.327 1.673 6 2.5 6h17c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5h-17z" />,
    <circle cx={4.75} cy={15.5} r={0.75} />,
    <circle cx={8.25} cy={15.5} r={0.75} />,
    <path d="M21.25 24a2.754 2.754 0 01-2.695-3.29l-2.482-.993A2.742 2.742 0 0113.75 21C12.234 21 11 19.766 11 18.25s1.234-2.75 2.75-2.75a2.72 2.72 0 012.058.932l2.868-1.721a2.699 2.699 0 01-.176-.961c0-1.516 1.234-2.75 2.75-2.75S24 12.234 24 13.75s-1.234 2.75-2.75 2.75a2.72 2.72 0 01-2.058-.932l-2.868 1.72a2.703 2.703 0 01.121 1.501l2.482.993A2.743 2.743 0 0121.25 18.5c1.516 0 2.75 1.234 2.75 2.75S22.766 24 21.25 24zm0-4.5c-.965 0-1.75.785-1.75 1.75S20.285 23 21.25 23 23 22.215 23 21.25s-.785-1.75-1.75-1.75zm-7.5-3c-.965 0-1.75.785-1.75 1.75S12.785 20 13.75 20s1.75-.785 1.75-1.75a1.74 1.74 0 00-.235-.871.307.307 0 01-.02-.028l-.016-.032a1.732 1.732 0 00-1.479-.819zm6.02-1.819c.313.506.869.819 1.48.819.965 0 1.75-.785 1.75-1.75S22.215 12 21.25 12s-1.75.785-1.75 1.75c0 .304.081.605.235.872l.014.02a.206.206 0 01.021.039z" />
  );

export default SvgServerShare;