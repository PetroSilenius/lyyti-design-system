import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={19} y={19.001} width={5} height={5} rx={0.625} ry={0.625} />,
    <rect x={12.5} y={19.001} width={5} height={5} rx={0.625} ry={0.625} />,
    <rect x={16} y={12.501} width={5} height={5} rx={0.625} ry={0.625} />,
    <path d="M21 0H3a3 3 0 00-3 3v14.5a3 3 0 003 3h6.5a1 1 0 001-1 1 1 0 00-1-1H3a1 1 0 01-1-1V5.251A.25.25 0 012.25 5h19.5a.25.25 0 01.25.25V11a1 1 0 001 1 1 1 0 001-1V3a3 3 0 00-3-3zM4.346 3a.966.966 0 01-1.692 0 .972.972 0 01-.154-.5.987.987 0 01.092-.409A1 1 0 013.5 1.5a.983.983 0 01.846.5.969.969 0 01.154.5.972.972 0 01-.154.5zm3.5 0a.966.966 0 01-1.692 0A.972.972 0 016 2.5a.969.969 0 01.154-.5.966.966 0 011.692 0A.969.969 0 018 2.5a.972.972 0 01-.154.5zm3.5 0a.966.966 0 01-1.692 0 .972.972 0 01-.154-.5.969.969 0 01.154-.5.966.966 0 011.692 0 .969.969 0 01.154.5.972.972 0 01-.154.5z" />
  );

export default SvgAppWindowModule;