import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdRom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.982 17.901a.786.786 0 01-.193-.025 3.753 3.753 0 01-2.702-4.421l.007-.039 2.394-10.5A3.73 3.73 0 016.144 0h11.712a3.73 3.73 0 013.656 2.916l2.394 10.5.007.041c.058.265.087.532.087.793a3.756 3.756 0 01-2.784 3.625.752.752 0 01-.843-1.101.745.745 0 01.456-.349 2.251 2.251 0 00-.58-4.425H3.75a2.252 2.252 0 00-2.25 2.25c0 1.02.688 1.915 1.674 2.176a.75.75 0 01-.192 1.475zM6.144 1.5A2.238 2.238 0 003.95 3.25l-1.727 7.576A3.693 3.693 0 013.75 10.5h16.5c.534 0 1.051.111 1.527.326L20.05 3.25a2.24 2.24 0 00-2.194-1.75H6.144z" />,
    <path d="M12 24c-3.722 0-6.75-2.692-6.75-6a5.702 5.702 0 01.901-3H5.25a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5h-.9c.57.888.885 1.926.9 2.99 0 3.316-3.028 6.01-6.75 6.01zm-3.91-9a4.183 4.183 0 00-1.34 3.01c0 2.473 2.355 4.49 5.25 4.49s5.25-2.019 5.25-4.5a4.173 4.173 0 00-1.34-3H8.09z" />,
    <circle cx={12} cy={18} r={1.125} />
  );

export default SvgCdRom;
