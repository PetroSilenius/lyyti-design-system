import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-heart_svg__a"
      d="M21.5 4.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2zM2.5 12.5a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2v2"
    />,
    <path
      className="server-heart_svg__a"
      d="M4.75 3.25A.25.25 0 105 3.5a.25.25 0 00-.25-.25M8.25 3.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.75 9.25A.25.25 0 105 9.5a.25.25 0 00-.25-.25M8.25 9.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M9 18.5H2.5a2 2 0 01-2-2v-2a2 2 0 012-2h8"
    />,
    <path
      className="server-heart_svg__a"
      d="M4.75 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.25 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M17.5 23.5l-5.113-5.335a3.026 3.026 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.834.836.835-.835a3.025 3.025 0 014.845.786 3.026 3.026 0 01-.567 3.492z"
    />
  );

export default SvgServerHeart;
