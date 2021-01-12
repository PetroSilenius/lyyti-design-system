import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSongs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.552 24c-1.625 0-2.948-1.323-2.948-2.948A2.952 2.952 0 0112 18.484V11.4c0-1.216.775-2.291 1.928-2.675l6.402-1.739c.262-.088.555-.136.852-.136A2.817 2.817 0 0124 9.672v8.38C24 19.677 22.677 21 21.052 21s-2.948-1.323-2.948-2.948a2.952 2.952 0 014.396-2.568V9.672a1.317 1.317 0 00-1.735-1.251l-6.403 1.74c-.507.17-.862.67-.862 1.239v9.652A2.952 2.952 0 0110.552 24zm0-4.396c-.798 0-1.448.65-1.448 1.448s.65 1.448 1.448 1.448S12 21.85 12 21.052s-.65-1.448-1.448-1.448zm10.5-3c-.798 0-1.448.65-1.448 1.448s.65 1.448 1.448 1.448 1.448-.65 1.448-1.448-.65-1.448-1.448-1.448zM5.25 1.5a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15zM5.25 7.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM5.25 13.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z" />,
    <circle cx={1.125} cy={1.125} r={1.125} />,
    <circle cx={1.125} cy={6.375} r={1.125} />,
    <circle cx={1.125} cy={12.375} r={1.125} />
  );

export default SvgPlaylistSongs;