import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowEye = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22.504a2.503 2.503 0 01-2.5-2.5v-16c0-1.379 1.121-2.5 2.5-2.5h19c1.378 0 2.5 1.121 2.5 2.5v16c0 1.378-1.122 2.5-2.5 2.5h-19zm-1.5-2.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-12.5H1v12.5zm22-13.5v-2.5c0-.827-.673-1.5-1.5-1.5h-19c-.827 0-1.5.673-1.5 1.5v2.5h22z" />,
    <circle cx={4} cy={4.504} r={0.75} />,
    <circle cx={7} cy={4.504} r={0.75} />,
    <circle cx={10} cy={4.504} r={0.75} />,
    <path d="M12 19c-1.694 0-3.513-.729-5.26-2.107a13.786 13.786 0 01-2.134-2.084.5.5 0 010-.617c.033-.043.835-1.059 2.134-2.084C8.487 10.729 10.306 10 12 10s3.513.729 5.26 2.108a13.786 13.786 0 012.134 2.084.5.5 0 010 .617 13.786 13.786 0 01-2.134 2.084C15.513 18.271 13.694 19 12 19zm-6.343-4.5C6.428 15.361 9.033 18 12 18s5.572-2.639 6.343-3.5C17.572 13.639 14.967 11 12 11s-5.572 2.639-6.343 3.5z" />,
    <path d="M12 17.504c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
  );

export default SvgAppWindowEye;
