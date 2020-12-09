import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.5 24a.5.5 0 01-.483-.371l-1.126-4.223A9 9 0 013 12a9 9 0 013.891-7.406L8.016.371A.503.503 0 018.5 0h7a.5.5 0 01.483.372l1.125 4.222A9 9 0 0121 12a9.004 9.004 0 01-3.858 7.382l-1.16 4.25A.5.5 0 0115.5 24h-7zm6.618-1l.79-2.896A9 9 0 0112 21a8.984 8.984 0 01-3.885-.885L8.884 23h6.234zm-7.405-4.251A7.954 7.954 0 0012 20c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8a8.01 8.01 0 003.417 6.552.499.499 0 01.296.197zm.402-14.864A8.984 8.984 0 0112 3c1.344 0 2.676.305 3.885.885L15.116 1H8.884l-.769 2.885z" />,
    <path d="M12 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 101 1c0-.551-.448-1-1-1z" />,
    <circle cx={14.25} cy={7.75} r={0.75} />,
    <circle cx={9.75} cy={7.75} r={0.75} />,
    <circle cx={14.25} cy={15.75} r={0.75} />,
    <circle cx={16.75} cy={11.75} r={0.75} />,
    <circle cx={7.25} cy={11.75} r={0.75} />,
    <circle cx={9.75} cy={15.75} r={0.75} />
  );

export default SvgSmartWatchCircleBrightness;
