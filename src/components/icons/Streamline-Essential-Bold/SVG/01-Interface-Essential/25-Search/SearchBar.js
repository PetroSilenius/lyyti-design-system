import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21.239 20.146a.249.249 0 01-.03-.316 5.05 5.05 0 10-1.381 1.381.25.25 0 01.316.03l2.535 2.534a.784.784 0 001.1 0 .774.774 0 000-1.094zm-4.206.373a3.484 3.484 0 113.484-3.484 3.488 3.488 0 01-3.484 3.484z" />,
    <path d="M10.5 17.241a.249.249 0 00-.245-.241H2.5a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h18a.5.5 0 01.5.5v3.257a.248.248 0 00.093.194 6.541 6.541 0 011.444 1.644.25.25 0 00.463-.132V8a2 2 0 00-2-2H2a2 2 0 00-2 2v9a2 2 0 002 2h8.479a.25.25 0 00.242-.315 6.538 6.538 0 01-.221-1.444z" />,
    <circle cx={5} cy={12.5} r={1} />,
    <circle cx={9} cy={12.5} r={1} />
  );

export default SvgSearchBar;
