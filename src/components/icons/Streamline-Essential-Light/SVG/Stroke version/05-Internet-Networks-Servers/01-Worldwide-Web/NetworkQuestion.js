import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-question_svg__a"
      d="M1.898 17.5h7.603M2.512 5.5h18.984M11.001 11.5H.511M11.378 23.484A11.5 11.5 0 1123.338 10M11.269.526c-6 6.5-5.891 14.958.109 22.958M12.73.526A16.127 16.127 0 0117 9"
    />,
    <circle className="network-question_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="network-question_svg__a"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgNetworkQuestion;
