import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M.75 21a.75.75 0 01-.75-.75v-15a.75.75 0 011.5 0v15a.75.75 0 01-.75.75zM23.25 21a.75.75 0 01-.75-.75v-15a.75.75 0 011.5 0v15a.75.75 0 01-.75.75zM5.25 22.5A2.252 2.252 0 013 20.25V3.75A2.252 2.252 0 015.25 1.5h13.5A2.252 2.252 0 0121 3.75v16.5a2.252 2.252 0 01-2.25 2.25H5.25zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H5.25z" />,
    <path d="M7.875 18.75c-1.447 0-2.625-1.177-2.625-2.625S6.428 13.5 7.875 13.5c.392 0 .776.088 1.125.255V9.5c0-.97.619-1.828 1.539-2.135l4.536-1.261c.203-.069.436-.106.673-.106.346 0 .695.083 1.009.24A2.238 2.238 0 0118 8.25v5.625c0 1.448-1.177 2.625-2.625 2.625s-2.625-1.177-2.625-2.625 1.177-2.625 2.625-2.625c.392 0 .776.088 1.125.255V8.25a.752.752 0 00-.749-.75.747.747 0 00-.238.039L10.977 8.8c-.273.091-.477.382-.477.7v6.625a2.628 2.628 0 01-2.625 2.625zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125S9 16.745 9 16.125 8.495 15 7.875 15zm7.5-2.25c-.62 0-1.125.505-1.125 1.125S14.755 15 15.375 15s1.125-.505 1.125-1.125-.505-1.125-1.125-1.125z" />
  );

export default SvgPlaylist;
