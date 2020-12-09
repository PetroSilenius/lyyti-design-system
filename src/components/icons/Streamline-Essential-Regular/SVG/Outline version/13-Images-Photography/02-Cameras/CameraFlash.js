import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.5 24a2.252 2.252 0 01-2.25-2.25v-7.5A2.252 2.252 0 014.5 12h.75v-.75a.75.75 0 011.5 0V12h1.786l.878-1.756a2.243 2.243 0 011.13-1.062L9.889 6H9.75c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h7.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-.139l-.656 3.182c.488.207.89.58 1.13 1.061L18.464 12H19.5a2.252 2.252 0 012.25 2.25v7.5A2.252 2.252 0 0119.5 24h-15zm0-10.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H18a.746.746 0 01-.671-.415l-1.085-2.171a.747.747 0 00-.671-.414h-4.146a.746.746 0 00-.671.415l-1.085 2.171A.747.747 0 019 13.5H4.5zM14.962 9l.618-3h-4.16l.618 3h2.924zM9.75 4.5h7.5v-3h-7.5v3z" />,
    <circle cx={6.375} cy={16.125} r={1.125} />,
    <path d="M13.5 21c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75S15.568 21 13.5 21zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S14.741 15 13.5 15z" />
  );

export default SvgCameraFlash;
