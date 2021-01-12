import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.5 8.5H.5A.5.5 0 000 9v13.067A1.47 1.47 0 001.5 23.5h21a1.47 1.47 0 001.5-1.433V9a.5.5 0 00-.5-.5zm-3 6.5h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1zm1 3v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1zm-9-2a5 5 0 11-5-5 5.006 5.006 0 015 5zM.5 7h23a.5.5 0 00.429-.757L20.914 1.2A1.536 1.536 0 0019.58.5H4.42a1.536 1.536 0 00-1.334.7L.071 6.244A.5.5 0 00.5 7z" />,
    <path d="M6.6 12a.638.638 0 00-.554.893l.9 2.218a.591.591 0 001.11 0l.9-2.218A.639.639 0 008.4 12zM8.4 20a.64.64 0 00.555-.894l-.9-2.218a.591.591 0 00-1.11 0l-.9 2.218A.639.639 0 006.6 20zM10.607 14.55l-2.219.9a.591.591 0 000 1.11l2.219.895a.638.638 0 00.893-.555v-1.795a.638.638 0 00-.893-.555zM4.393 17.451l2.219-.895a.591.591 0 000-1.11l-2.219-.9a.638.638 0 00-.893.555V16.9a.638.638 0 00.893.551z" />,
    <circle cx={17.5} cy={13.001} r={0.5} />,
    <circle cx={19.5} cy={13.001} r={0.5} />,
    <circle cx={17.5} cy={19.001} r={0.5} />,
    <circle cx={19.5} cy={19.001} r={0.5} />
  );

export default SvgUsbPort;