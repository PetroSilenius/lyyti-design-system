import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserGauge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 22.5A2.252 2.252 0 010 20.25V3.75A2.252 2.252 0 012.25 1.5h19.5A2.252 2.252 0 0124 3.75v16.5a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V7.5h-21v12.75zM22.5 6V3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V6h21z" />,
    <path d="M12 19.5c-.802 0-1.555-.312-2.121-.879S9 17.301 9 16.5s.312-1.555.879-2.121c.938-.938 5.665-2.949 6.604-3.343a.748.748 0 01.981.981c-.394.938-2.409 5.668-3.343 6.603A2.973 2.973 0 0112 19.5zm3.328-6.33c-2.322 1.035-4.04 1.92-4.389 2.269-.283.283-.439.66-.439 1.061s.156.777.439 1.061c.283.283.66.438 1.061.438.401 0 .778-.156 1.061-.438.349-.35 1.217-2.036 2.267-4.391zM4.5 18a.75.75 0 010-1.5H6A.75.75 0 016 18H4.5zM7.922 13.922a.743.743 0 01-.53-.22l-1.226-1.226a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l1.226 1.226a.752.752 0 010 1.061.746.746 0 01-.53.219zM12 11.25a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM18 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H18z" />
  );

export default SvgBrowserGauge;
