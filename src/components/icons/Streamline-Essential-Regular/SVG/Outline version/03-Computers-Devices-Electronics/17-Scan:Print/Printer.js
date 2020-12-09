import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPrinter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.25 24a.748.748 0 01-.735-.897l.72-3.603H2.25A2.252 2.252 0 010 17.25v-6c0-.051.005-.102.016-.153l.005-.021a.732.732 0 01.043-.127c.005-.014.012-.028.018-.04l2.582-5.165A2.237 2.237 0 014.677 4.5H6V.75A.75.75 0 016.75 0h10.5a.75.75 0 01.75.75V4.5h1.323c.858 0 1.629.476 2.013 1.244l2.585 5.171a.771.771 0 01.062.175l.004.022a.788.788 0 01.013.138v6a2.252 2.252 0 01-2.25 2.25h-2.985l.72 3.603a.75.75 0 01-.735.897H5.25zm12.585-1.5l-1.2-6h-9.27l-1.2 6h11.67zM21.75 18a.75.75 0 00.75-.75V12h-21v5.25c0 .414.336.75.75.75h3.285l.479-2.397A.753.753 0 016.75 15h10.5c.356 0 .666.254.735.603l.48 2.397h3.285zm.287-7.5l-2.042-4.086A.75.75 0 0019.323 6H18v2.25a.75.75 0 01-.75.75H6.75A.75.75 0 016 8.25V6H4.677a.746.746 0 00-.671.415L1.963 10.5h20.074zm-5.537-3v-6h-9v6h9z" />,
    <circle cx={20.625} cy={14.625} r={1.125} />,
    <path d="M9.75 21a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z" />
  );

export default SvgPrinter;
