import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 20.25A2.252 2.252 0 010 18V3A2.252 2.252 0 012.25.75h16.5A2.252 2.252 0 0121 3v8.25a.75.75 0 01-1.5 0V3a.75.75 0 00-.75-.75H2.25A.75.75 0 001.5 3v15c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z" />,
    <path d="M6.375 16.5c-1.447 0-2.625-1.177-2.625-2.625s1.178-2.625 2.625-2.625c.392 0 .776.089 1.125.255V7.081c0-.97.618-1.828 1.539-2.135l4.536-1.261c.206-.069.44-.107.676-.107A2.247 2.247 0 0116.5 5.831v5.794c0 1.448-1.177 2.625-2.625 2.625s-2.625-1.177-2.625-2.625A2.628 2.628 0 0113.875 9c.392 0 .776.089 1.125.255V5.831a.752.752 0 00-.751-.75.734.734 0 00-.236.039L9.477 6.381c-.273.091-.477.382-.477.7v6.794A2.628 2.628 0 016.375 16.5zm0-3.75c-.62 0-1.125.505-1.125 1.125S5.755 15 6.375 15 7.5 14.495 7.5 13.875s-.505-1.125-1.125-1.125zm7.5-2.25c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125S15 12.245 15 11.625s-.505-1.125-1.125-1.125zM12.75 23.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5zM12.75 20.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5zM12.75 17.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-10.5z" />
  );

export default SvgPlaylistMenu;