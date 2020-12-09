import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M12 13.5a4.756 4.756 0 01-4.75-4.75c0-.822.218-1.636.631-2.355a.506.506 0 01.059-.099A4.718 4.718 0 0112 4a4.765 4.765 0 014.709 4.161 4.6 4.6 0 01.041.589A4.756 4.756 0 0112 13.5zM8.496 7.426c-.163.426-.246.87-.246 1.324A3.754 3.754 0 0012 12.5a3.755 3.755 0 003.748-3.618 7.493 7.493 0 01-2.311.362 7.56 7.56 0 01-4.941-1.818zm.493-.905a6.639 6.639 0 004.447 1.719c.758 0 1.499-.129 2.205-.382A3.752 3.752 0 0012 5a3.74 3.74 0 00-3.011 1.521zM5.683 19a.5.5 0 01-.451-.715 7.502 7.502 0 013.567-3.567 7.413 7.413 0 013.19-.718 7.53 7.53 0 016.781 4.286.501.501 0 01-.905.428A6.526 6.526 0 0011.989 15c-.96 0-1.89.209-2.763.623a6.506 6.506 0 00-3.091 3.091.502.502 0 01-.452.286z" />
  );

export default SvgSingleManCircle;
