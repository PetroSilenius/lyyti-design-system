import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.25 24a6.706 6.706 0 01-4.801-2.01 6.694 6.694 0 01-1.949-4.74 6.758 6.758 0 016.75-6.75 6.706 6.706 0 014.801 2.01A6.694 6.694 0 0124 17.25 6.758 6.758 0 0117.25 24zm-3.141-2.548A5.241 5.241 0 0017.25 22.5a5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.343 7.343zM17.25 12A5.256 5.256 0 0012 17.25c0 1.135.37 2.236 1.048 3.141l7.343-7.343A5.239 5.239 0 0017.25 12z" />,
    <path d="M2.25 18A2.252 2.252 0 010 15.75V3.765a2.252 2.252 0 012.25-2.25h2.243V.75a.75.75 0 011.5 0v.765h6V.75a.75.75 0 011.5 0v.765h2.257A2.252 2.252 0 0118 3.765V8.25a.75.75 0 01-1.5 0V7.5h-15v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zM16.5 6V3.765a.75.75 0 00-.75-.75h-2.257v.735a.75.75 0 01-1.5 0v-.735h-6v.735a.75.75 0 01-1.5 0v-.735H2.25a.75.75 0 00-.75.75V6h15z" />
  );

export default SvgCalendarBlock;
