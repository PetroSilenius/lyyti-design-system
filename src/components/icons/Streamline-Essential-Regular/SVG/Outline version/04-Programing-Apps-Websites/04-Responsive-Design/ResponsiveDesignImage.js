import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.25 13.5A2.252 2.252 0 0115 11.25v-9A2.252 2.252 0 0117.25 0h4.5A2.252 2.252 0 0124 2.25v9a2.252 2.252 0 01-2.25 2.25h-4.5zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.75h-6v.75zm6-2.25V4.5h-6V9h6zm0-6v-.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V3h6z" />,
    <path d="M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3h10.5a.75.75 0 010 1.5H2.25a.75.75 0 00-.75.75V7.5h11.25a.75.75 0 010 1.5H1.5v12.75c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6A2.252 2.252 0 0120.25 24h-18z" />,
    <circle cx={6.461} cy={12.375} r={1.125} />,
    <path d="M4.5 21a.75.75 0 010-1.5h1.121l2.323-3.485a1.486 1.486 0 011.249-.668c.343 0 .667.113.935.328l.615.49 1.534-2.196a1.488 1.488 0 011.525-.611c.392.079.73.306.952.639l3.869 5.835c.01.014.025.041.032.056a.57.57 0 01.06.141.669.669 0 01.032.171.71.71 0 01-.087.401.59.59 0 01-.129.176.738.738 0 01-.293.179l-.04.013a.666.666 0 01-.195.031H4.5zm12.103-1.5l-3.098-4.672-1.99 2.852a.75.75 0 01-1.082.157l-1.24-.99H9.19L7.423 19.5h9.18z" />
  );

export default SvgResponsiveDesignImage;
