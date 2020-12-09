import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingHalf = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={20.25} cy={7.498} r={3.5} />,
    <circle cx={13.25} cy={3.498} r={3} />,
    <circle cx={6.25} cy={5.498} r={3} />,
    <circle cx={2.75} cy={11.498} r={2.5} />,
    <circle cx={4.25} cy={17.498} r={2.5} />,
    <circle cx={9.25} cy={21.498} r={2} />,
    <circle cx={14.625} cy={21.644} r={1.5} />
  );

export default SvgLoadingHalf;
