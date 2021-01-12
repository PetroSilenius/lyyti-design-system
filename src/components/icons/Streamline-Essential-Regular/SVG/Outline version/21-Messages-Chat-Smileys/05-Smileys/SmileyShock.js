import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <circle cx={8.25} cy={9} r={1.125} />,
    <circle cx={15.75} cy={9} r={1.125} />,
    <path d="M12 21c-2.068 0-3.75-1.682-3.75-3.75S9.932 13.5 12 13.5s3.75 1.682 3.75 3.75S14.068 21 12 21zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 19.5 12 19.5s2.25-1.009 2.25-2.25S13.241 15 12 15z" />
  );

export default SvgSmileyShock;