import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.5A11.5 11.5 0 10.5 12 11.513 11.513 0 0012 23.5zM7.05 8.465a1 1 0 111.414-1.414l3.359 3.359a.25.25 0 00.353 0l3.359-3.359a1 1 0 111.414 1.414l-3.359 3.359a.25.25 0 000 .353l3.359 3.359a1 1 0 11-1.414 1.414l-3.359-3.359a.25.25 0 00-.353 0L8.464 16.95a1 1 0 01-1.414-1.414l3.359-3.359a.25.25 0 000-.353z" />
  );

export default SvgRemoveCircle;
