import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudLoading = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6 21a.75.75 0 010-1.5h6.75a.75.75 0 010 1.5H6z" />,
    <path d="M6 24c-2.068 0-3.75-1.682-3.75-3.75S3.932 16.5 6 16.5h12c2.068 0 3.75 1.682 3.75 3.75S20.068 24 18 24H6zm0-6c-1.241 0-2.25 1.009-2.25 2.25S4.76 22.5 6 22.5h12c1.241 0 2.25-1.009 2.25-2.25S19.241 18 18 18H6zM8.25 15A7.462 7.462 0 01.837 8.643C.206 4.556 3.018.717 7.106.086a7.479 7.479 0 018.284 5.109 5.209 5.209 0 012.612-.695c1.405 0 2.723.547 3.714 1.539s1.537 2.311 1.536 3.713A5.256 5.256 0 0118.002 15H8.25zm.014-13.503c-.309 0-.621.024-.929.072a5.958 5.958 0 00-3.926 2.384A5.96 5.96 0 002.32 8.415 5.968 5.968 0 008.25 13.5H18a3.755 3.755 0 003.752-3.749 3.725 3.725 0 00-1.097-2.652A3.727 3.727 0 0018.003 6a3.74 3.74 0 00-2.568 1.016.746.746 0 01-.757.162.75.75 0 01-.497-.595 5.96 5.96 0 00-2.385-3.926 5.943 5.943 0 00-3.532-1.16z" />
  );

export default SvgCloudLoading;
