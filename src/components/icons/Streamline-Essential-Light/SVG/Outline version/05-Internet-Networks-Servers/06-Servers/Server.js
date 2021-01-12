import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6.5 24a.5.5 0 010-1h5v-6h-9A2.503 2.503 0 010 14.5v-2c0-.798.376-1.532 1.003-2A2.488 2.488 0 010 8.5v-2c0-.544.174-1.061.502-1.498a.504.504 0 01.09-.13L4.55.765A2.515 2.515 0 016.35 0h11.3c.676 0 1.332.28 1.801.766l3.957 4.106a.526.526 0 01.091.13c.327.437.501.954.501 1.498v2c0 .798-.376 1.532-1.003 2a2.488 2.488 0 011.003 2v2c0 1.378-1.122 2.5-2.5 2.5h-9v6h5a.5.5 0 010 1h-11zm-4-13c-.827 0-1.5.673-1.5 1.5v2c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5h-19zm0-6C1.673 5 1 5.673 1 6.5v2c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5h-19zm18.678-1L18.73 1.46A1.507 1.507 0 0017.65 1H6.35c-.405 0-.799.167-1.08.459L2.822 4h18.356z" />,
    <circle cx={4.75} cy={7.5} r={0.75} />,
    <circle cx={8.25} cy={7.5} r={0.75} />,
    <circle cx={4.75} cy={13.5} r={0.75} />,
    <circle cx={8.25} cy={13.5} r={0.75} />,
    <path d="M.5 24a.5.5 0 010-1h1a.5.5 0 010 1h-1zM3.5 24a.5.5 0 010-1h1a.5.5 0 010 1h-1zM19.5 24a.5.5 0 010-1h1a.5.5 0 010 1h-1zM22.5 24a.5.5 0 010-1h1a.5.5 0 010 1h-1z" />
  );

export default SvgServer;