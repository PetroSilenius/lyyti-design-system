import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingHoldCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-hold-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-hold-code_svg__a"
      d="M13.533 16.35l7.545-.575a1.554 1.554 0 011.509 2.244 1.559 1.559 0 01-.845.76l-10.434 3.912a2.991 2.991 0 01-2 .037l-7.994-2.664"
    />,
    <path
      className="programming-hold-code_svg__a"
      d="M6.564 17.064h5.788a1.335 1.335 0 001.266-.912 1.335 1.335 0 00-.915-1.709l-5.938-1.619a4.512 4.512 0 00-1.924-.1l-3.527.588M8.73 2.966l-3.666 2.75 3.666 2.75M17.897 2.966l3.667 2.75-3.667 2.75M14.23 1.132l-1.833 9.167"
    />
  );

export default SvgProgrammingHoldCode;
