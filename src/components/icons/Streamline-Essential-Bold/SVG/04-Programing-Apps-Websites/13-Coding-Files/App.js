import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 9.626h-.625a.25.25 0 00-.25.25v1.25a.25.25 0 00.25.25H12a.875.875 0 000-1.75zM7 9.626a.876.876 0 00-.875.875v.625a.25.25 0 00.25.25h1.25a.25.25 0 00.25-.25V10.5A.876.876 0 007 9.626zM17 9.626h-.625a.25.25 0 00-.25.25v1.25a.25.25 0 00.25.25H17a.875.875 0 000-1.75z" />,
    <path d="M22.5 4.5h-21A1.5 1.5 0 000 6v12a1.5 1.5 0 001.5 1.5h21A1.5 1.5 0 0024 18V6a1.5 1.5 0 00-1.5-1.5zM9.125 15a.625.625 0 01-1.25 0v-2.124a.25.25 0 00-.25-.25h-1.25a.25.25 0 00-.25.25V15a.625.625 0 01-1.25 0v-4.374a2.213 2.213 0 011.9-2.239 2.128 2.128 0 012.35 2.113zm2.75-2.375h-.5a.25.25 0 00-.25.25V15a.625.625 0 01-1.25 0V9a.625.625 0 01.625-.625H12a2.128 2.128 0 012.114 2.347 2.213 2.213 0 01-2.239 1.904zm5 0h-.5a.25.25 0 00-.25.25V15a.625.625 0 01-1.25 0V9a.625.625 0 01.625-.625H17a2.128 2.128 0 012.114 2.347 2.213 2.213 0 01-2.239 1.904z" />
  );

export default SvgApp;
