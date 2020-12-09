import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 24c-1.654 0-3-1.346-3-3V3.75A3.754 3.754 0 013.75 0H18c.827 0 1.5.673 1.5 1.5v6.75a.75.75 0 01-1.5 0V1.5H3.75A2.252 2.252 0 001.5 3.75v14.651A2.973 2.973 0 013 18h5.25a.75.75 0 010 1.5H3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h5.25a.75.75 0 010 1.5H3z" />,
    <circle cx={15.375} cy={14.625} r={1.125} />,
    <path d="M12.25 24c-.965 0-1.75-.785-1.75-1.75v-10c0-.965.785-1.75 1.75-1.75h10c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75h-10zm10-1.5a.25.25 0 00.25-.25v-1.023l-2.265-3.398-2.001 2.853a.755.755 0 01-.614.32.753.753 0 01-.469-.165l-1.235-.988h-.001L14.15 22.5h8.1zm-10-10.5a.25.25 0 00-.25.25v10c0 .138.112.25.25.25h.098l2.318-3.484a1.495 1.495 0 011.25-.668c.338 0 .67.116.935.327l.613.491 1.542-2.197a1.492 1.492 0 011.523-.611c.393.078.731.305.954.639l1.017 1.526V12.25a.25.25 0 00-.25-.25h-10z" />
  );

export default SvgBookImage;
