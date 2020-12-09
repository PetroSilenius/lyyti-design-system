import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M12.729 1.2l3.346 6.629 6.44.638a.805.805 0 01.5 1.374l-5.3 5.253 1.965 7.138a.813.813 0 01-1.151.935L12 19.934l-6.52 3.229a.813.813 0 01-1.151-.935l1.965-7.138L.99 9.837a.805.805 0 01.5-1.374l6.44-.638L11.271 1.2a.819.819 0 011.458 0z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgRatingStar;
