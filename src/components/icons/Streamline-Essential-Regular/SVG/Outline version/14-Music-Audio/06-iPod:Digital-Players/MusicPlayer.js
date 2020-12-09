import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6.75 21c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM3.75 10.5A.75.75 0 013 9.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM6.75 10.5A.75.75 0 016 9.75V7.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM9.75 10.5A.75.75 0 019 9.75V6a.75.75 0 011.5 0v3.75a.75.75 0 01-.75.75z" />,
    <path d="M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h10c.965 0 1.75.785 1.75 1.75V19.5h3.75a2.252 2.252 0 002.25-2.25V1.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H21v11.25A3.754 3.754 0 0117.25 21H13.5v1.25c0 .965-.785 1.75-1.75 1.75h-10zm-.25-1.75c0 .138.112.25.25.25h10a.25.25 0 00.25-.25V13.5H1.5v8.75zM12 12V1.75a.25.25 0 00-.25-.25h-10a.25.25 0 00-.25.25V12H12zm10.5-7.5v-3H21v3h1.5z" />,
    <path d="M17.25 5.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z" />
  );

export default SvgMusicPlayer;
