import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDelete = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24a11.922 11.922 0 01-8.43-3.468.343.343 0 01-.099-.099A11.924 11.924 0 010 12C0 5.383 5.383 0 12 0a11.92 11.92 0 018.43 3.468.397.397 0 01.099.099A11.92 11.92 0 0124 12c0 6.617-5.383 12-12 12zm-6.87-4.069A10.448 10.448 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.534-.909-4.958-2.569-6.87L5.13 19.931zM12 1.5C6.21 1.5 1.5 6.21 1.5 12c0 2.534.91 4.958 2.569 6.87L18.87 4.069A10.453 10.453 0 0012 1.5z" />
  );

export default SvgDelete;
