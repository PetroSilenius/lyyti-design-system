import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.868 16l-1.75-3a1 1 0 10-1.728 1l1.164 2H17.5a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 018 17.5 1.5 1.5 0 006.5 16H2.454l1.164-2a1 1 0 10-1.728-1L.14 16a1.414 1.414 0 00-.14.5v6A1.5 1.5 0 001.5 24h21a1.5 1.5 0 001.5-1.5v-6a1.258 1.258 0 00-.132-.5z" />,
    <path d="M7.9 13.5h8.344a.5.5 0 00.459-.7L15.25 9.427a1 1 0 00-1.587-.067L12 11.5l-1.776-1.357a1 1 0 00-1.274.206l-1.478 2.388a.5.5 0 00.428.763z" />,
    <circle cx={9} cy={6} r={1.5} />,
    <path d="M4.511 12.5a1 1 0 001-1L5.5 2.25A.249.249 0 015.754 2h12.493a.25.25 0 01.25.25l.003 9.25a1 1 0 001 1 1 1 0 001-1V2a2 2 0 00-2-2h-13a2 2 0 00-2 2l.007 9.5a1 1 0 001.004 1z" />
  );

export default SvgDrawerImage;
