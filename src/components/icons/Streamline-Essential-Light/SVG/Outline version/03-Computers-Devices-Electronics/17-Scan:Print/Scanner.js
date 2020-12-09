import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScanner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.5 24C2.114 24 .008 22.281 0 19.514v-.011c0-.048.01-.083.014-.1a.35.35 0 01.021-.09l3.936-9.842-1.952-6.834a.353.353 0 01-.01-.061A.354.354 0 012 2.5C2 1.121 3.122 0 4.5 0h15C20.879 0 22 1.121 22 2.5a.309.309 0 01-.01.078.259.259 0 01-.01.061l-1.953 6.835 3.935 9.837c.019.046.022.082.025.101A.294.294 0 0124 19.5l-.001.027C23.996 22.278 21.889 24 18.5 24h-13zm-4.47-4c.236 1.911 1.849 3 4.47 3h13c2.622 0 4.234-1.089 4.47-3H1.03zm21.732-1l-3.6-9H4.839l-3.6 9h21.523zM19.123 9l1.714-6H3.163l1.714 6h14.246zm1.791-7A1.51 1.51 0 0019.5 1h-15a1.51 1.51 0 00-1.414 1h17.828z" />,
    <path d="M4.5 18a.503.503 0 01-.475-.659l2-6A.501.501 0 016.5 11h11c.216 0 .406.137.474.342l2 6A.499.499 0 0119.5 18h-15zm14.306-1l-1.667-5H6.861l-1.667 5h13.612z" />,
    <circle cx={16.25} cy={21.5} r={0.75} />,
    <circle cx={19.25} cy={21.5} r={0.75} />
  );

export default SvgScanner;
