import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakersNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={9} cy={15.5} r={2} />,
    <path d="M16.75 11.038a3.25 3.25 0 01-1.393-6.186.252.252 0 00.143-.226V2.868A3.249 3.249 0 0116.594.437.25.25 0 0016.428 0H1.5A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h15a1.5 1.5 0 001.5-1.5V11.142a.25.25 0 00-.322-.24 3.229 3.229 0 01-.928.136zM9 2.5A2.5 2.5 0 116.5 5 2.5 2.5 0 019 2.5zm0 19a6 6 0 116-6 6 6 0 01-6 6z" />,
    <path d="M21.837.046l-3.409 1.1A1.752 1.752 0 0017 2.869V5.82a.219.219 0 01-.223.219h-.027a1.75 1.75 0 101.75 1.75v-4.92c0-.121.086-.225.3-.27l3.409-1.1a.248.248 0 01.3.246V3.82a.219.219 0 01-.223.219h-.036A1.75 1.75 0 1024 5.789V1.744A1.753 1.753 0 0021.837.046z" />
  );

export default SvgSpeakersNote;
