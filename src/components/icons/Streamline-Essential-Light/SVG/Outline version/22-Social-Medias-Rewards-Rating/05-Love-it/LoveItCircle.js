import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M12 18.5a.503.503 0 01-.361-.154l-5.114-5.335a3.52 3.52 0 01-.653-4.063A3.503 3.503 0 017.911 7.18a3.54 3.54 0 011.119-.182c.548 0 1.078.126 1.574.374.34.17.648.392.916.66l.48.483.481-.481a3.501 3.501 0 012.493-1.031 3.52 3.52 0 013.153 1.948 3.523 3.523 0 01-.661 4.07l-5.106 5.327a.505.505 0 01-.36.152zM9.029 7.998c-.271 0-.54.044-.801.131a2.525 2.525 0 00-.988 4.182L12 17.277l4.752-4.958a2.528 2.528 0 00.007-3.58c-.476-.476-1.11-.738-1.785-.738s-1.31.262-1.786.739l-.835.835a.494.494 0 01-.707 0l-.834-.836a2.507 2.507 0 00-.656-.472 2.5 2.5 0 00-1.127-.269z" />
  );

export default SvgLoveItCircle;
