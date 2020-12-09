import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4 21c-.551 0-1-.448-1-1v-2.009c0-.552.449-1 1-1h10a1 1 0 011 1V20a1 1 0 01-1 1H4zm0-1h10v-2.009H4V20zM10.5 11C9.673 11 9 10.327 9 9.5S9.673 8 10.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z" />,
    <path d="M20.5 24a.5.5 0 01-.5-.5V23H4v.5a.5.5 0 01-1 0V23h-.5A2.503 2.503 0 010 20.5v-3C0 16.122 1.121 15 2.5 15h19c1.378 0 2.5 1.122 2.5 2.5v3c0 1.378-1.122 2.5-2.5 2.5H21v.5a.5.5 0 01-.5.5zm-18-8c-.827 0-1.5.673-1.5 1.5v3c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5h-19zM10.5 13C8.57 13 7 11.43 7 9.5S8.57 6 10.5 6 14 7.57 14 9.5 12.43 13 10.5 13zm0-6C9.121 7 8 8.121 8 9.5S9.121 12 10.5 12 13 10.878 13 9.5 11.879 7 10.5 7z" />,
    <circle cx={20.75} cy={18.5} r={0.75} />,
    <circle cx={17.75} cy={18.5} r={0.75} />,
    <path d="M17.25 8.613c-.965 0-1.75-.785-1.75-1.75a1.752 1.752 0 012.5-1.58v-2.95c0-.646.413-1.218 1.026-1.422L22.05.07c.136-.046.291-.071.448-.071A1.503 1.503 0 0124 1.5v3.863c0 .965-.785 1.75-1.75 1.75s-1.75-.785-1.75-1.75a1.752 1.752 0 012.5-1.58V1.5a.498.498 0 00-.277-.448.5.5 0 00-.382-.027l-3.024.841a.497.497 0 00-.317.467v4.53c0 .965-.785 1.75-1.75 1.75zm0-2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm5-1.5a.75.75 0 100 1.5.75.75 0 000-1.5zM18.553 14a.498.498 0 01-.473-.34.497.497 0 01.025-.382 8.43 8.43 0 00.866-3.305.502.502 0 01.503-.473c.298.015.51.251.496.526a9.432 9.432 0 01-.968 3.695.5.5 0 01-.449.279zM2.447 14A.497.497 0 012 13.724 9.433 9.433 0 013.436 3.136a9.424 9.424 0 017.057-3.139c2.344 0 4.596.865 6.342 2.437a.5.5 0 01-.669.744 8.459 8.459 0 00-6.123-2.168 8.424 8.424 0 00-5.864 2.795 8.438 8.438 0 00-1.285 9.471.497.497 0 01-.224.671.495.495 0 01-.223.053z" />
  );

export default SvgCdPlayer;
