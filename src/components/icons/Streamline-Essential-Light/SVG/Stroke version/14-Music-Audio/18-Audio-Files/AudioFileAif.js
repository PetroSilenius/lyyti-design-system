import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileAif = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-aif_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-aif_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="audio-file-aif_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M6.5 18.5V14a1.5 1.5 0 013 0v4.5M6.5 15.5h3M12.5 12.5v6M11.5 18.5h2M11.5 12.5h2M15.5 18.5v-5a1 1 0 011-1h2M15.5 15.5h2"
    />
  );

export default SvgAudioFileAif;