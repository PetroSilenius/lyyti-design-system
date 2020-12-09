import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22.504a2.503 2.503 0 01-2.5-2.5v-16c0-1.379 1.121-2.5 2.5-2.5h19c1.378 0 2.5 1.121 2.5 2.5v16c0 1.378-1.122 2.5-2.5 2.5h-19zm-1.5-2.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-12.5h-3v7.065c0 .267-.104.518-.293.707s-.44.293-.707.293a.995.995 0 01-.555-.168l-1.946-1.3-1.945 1.296a.993.993 0 01-.751.148.994.994 0 01-.803-.98V7.504H1v12.5zM16.5 13c.099 0 .195.029.278.084l2.223 1.484L19 7.504h-5v7.061l2.223-1.481A.496.496 0 0116.5 13zm3-6.5c.014 0 .032.002.05.005L23 6.504v-2.5c0-.827-.673-1.5-1.5-1.5h-19c-.827 0-1.5.673-1.5 1.5v2.5h12.456A.247.247 0 0113.5 6.5h6z" />,
    <circle cx={4} cy={4.504} r={0.75} />,
    <circle cx={7} cy={4.504} r={0.75} />,
    <circle cx={10} cy={4.504} r={0.75} />
  );

export default SvgAppWindowBookmark;
