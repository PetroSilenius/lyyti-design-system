import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19.51 21.75a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75V6.753H2.26V19.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5A2.252 2.252 0 01.76 19.5V3A2.252 2.252 0 013.01.75h18A2.252 2.252 0 0123.26 3v16.5a2.252 2.252 0 01-2.25 2.25h-1.5zm2.25-16.497V3a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.253h19.5z" />,
    <path d="M11.958 23.25H9.76c-.827 0-1.5-.673-1.5-1.5v-1.638a5.653 5.653 0 01-3-5.131c0-1.787.703-3.479 1.979-4.754A6.714 6.714 0 0112.01 8.25a6.76 6.76 0 016.75 6.745 5.647 5.647 0 01-3 5.12v1.635c0 .827-.673 1.5-1.5 1.5h-2.196a.45.45 0 01-.106 0zm2.302-1.5v-2.109c0-.302.18-.574.459-.691a4.126 4.126 0 002.541-3.931c0-2.914-2.355-5.269-5.25-5.269A5.256 5.256 0 006.76 15a4.138 4.138 0 002.541 3.947.748.748 0 01.459.691v2.112h1.5v-1.497a.75.75 0 011.5 0v1.497h1.5z" />,
    <circle cx={9.76} cy={15.003} r={1.5} />,
    <circle cx={14.26} cy={15.003} r={1.5} />
  );

export default SvgAppWindowSkull;
