import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 24.002a2.252 2.252 0 01-2.25-2.25v-9.7a1.502 1.502 0 011.5-1.499h.029c.313 0 .643.119.903.325l.568.451V2.25A2.252 2.252 0 016 0h12a2.252 2.252 0 012.25 2.25v9.078l.568-.45c.264-.209.595-.324.931-.324.462 0 .89.207 1.177.568.209.264.324.594.325.93v9.701a2.252 2.252 0 01-2.25 2.25H3zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-9.7l-7.431 5.894a3.771 3.771 0 01-2.32.805 3.768 3.768 0 01-2.316-.803L2.25 12.053v9.699zm8.363-4.981c.4.313.88.48 1.386.48.508 0 .989-.167 1.39-.482l5.36-4.251V2.25a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v10.268l5.363 4.253z" />,
    <path d="M9 7.5c-1.241 0-2.25-1.009-2.25-2.25S7.759 3 9 3s2.25 1.009 2.25 2.25S10.241 7.5 9 7.5zm0-3A.75.75 0 109 6a.75.75 0 000-1.5zM9 13.5a.752.752 0 01-.649-1.126l2.55-4.4c.015-.025.031-.049.048-.073A2.238 2.238 0 0112.754 7a2.257 2.257 0 011.796.9c.019.026.035.05.05.076l2.549 4.398A.752.752 0 0116.5 13.5H9zm6.198-1.5l-1.871-3.229a.74.74 0 00-.682-.263.742.742 0 00-.471.263L10.302 12h4.896z" />
  );

export default SvgEmailActionImage;
