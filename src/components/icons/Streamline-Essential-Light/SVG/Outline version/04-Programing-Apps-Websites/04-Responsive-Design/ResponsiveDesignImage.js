import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 24A2.503 2.503 0 010 21.5v-14C0 6.121 1.121 5 2.5 5h12a.5.5 0 010 1h-12C1.673 6 1 6.673 1 7.5V10h13.5a.5.5 0 010 1H1v10.5c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-8a.5.5 0 011 0v8c0 1.378-1.122 2.5-2.5 2.5h-17z" />,
    <circle cx={4.25} cy={7.75} r={0.75} />,
    <circle cx={7.25} cy={7.75} r={0.75} />,
    <circle cx={10.25} cy={7.75} r={0.75} />,
    <path d="M5 22a.499.499 0 01-.428-.758l2.638-4.396a1.002 1.002 0 011.626-.125l1.539 1.847 1.685-3.709a.991.991 0 01.911-.587c.412 0 .777.247.929.63l2.565 6.413A.5.5 0 0116 22H5zm10.262-1l-2.291-5.728-2.015 4.435a.5.5 0 01-.84.113l-2.049-2.459L5.883 21h9.379zM4.5 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 000 2 1.001 1.001 0 000-2zM17.5 12c-.827 0-1.5-.673-1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5h-5zm-.5-1.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V10h-6v.5zM23 9V3h-6v6h6zm0-7v-.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V2h6z" />
  );

export default SvgResponsiveDesignImage;
