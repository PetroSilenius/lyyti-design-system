import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11 22.998c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.038 9-9 9zm0-17c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM21.205 9.282a1.003 1.003 0 01-.877-.515 12.242 12.242 0 00-5.154-5.081 1 1 0 01.36-1.872l6.278-.739a.987.987 0 01.737.208.994.994 0 01.373.902l-.726 6.213a.992.992 0 01-.373.668.987.987 0 01-.618.216zm-5.554-6.475a13.217 13.217 0 015.555 5.48l.723-6.219-6.278.739z" />,
    <path d="M11.5 19a.216.216 0 01-.035-.003l-1.965.001a.5.5 0 010-1H11V12.5a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1c.827 0 1.5.673 1.5 1.5v5.498h1.5a.5.5 0 010 1h-1.97a.324.324 0 01-.03.002zM11.5 10a.75.75 0 01-.03-1.498l.03-.001a.744.744 0 01.75.748.751.751 0 01-.75.751z" />
  );

export default SvgCursorInformation;
