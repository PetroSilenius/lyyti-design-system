import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 24A2.503 2.503 0 011 21.5v-19C1 1.121 2.121 0 3.5 0h17a.5.5 0 010 1h-17C2.673 1 2 1.673 2 2.5S2.673 4 3.5 4h16c.827 0 1.5.673 1.5 1.5v6.526a.5.5 0 01-1 0V5.5a.5.5 0 00-.5-.5h-16A2.485 2.485 0 012 4.499V21.5c0 .827.673 1.5 1.5 1.5h8.581a.5.5 0 010 1H3.5z" />,
    <path d="M3.5 3a.5.5 0 010-1h16a.5.5 0 010 1h-16zM22.5 24a.5.5 0 01-.354-.146l-2.938-2.938a5.01 5.01 0 01-3.18 1.142c-2.773 0-5.029-2.256-5.029-5.029S13.256 12 16.029 12s5.029 2.256 5.029 5.029a5.01 5.01 0 01-1.142 3.18l2.938 2.938A.5.5 0 0122.5 24zm-6.471-11C13.807 13 12 14.807 12 17.029s1.807 4.029 4.029 4.029 4.029-1.807 4.029-4.029S18.251 13 16.029 13z" />
  );

export default SvgBookSearch;
