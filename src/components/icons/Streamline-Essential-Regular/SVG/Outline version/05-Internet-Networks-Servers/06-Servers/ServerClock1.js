import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerClock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4.5} cy={3.75} r={1.125} />,
    <path d="M9.751 4.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM14.251 4.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z" />,
    <circle cx={4.5} cy={9.75} r={1.125} />,
    <path d="M9.751 10.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z" />,
    <circle cx={1.126} cy={18.375} r={1.125} />,
    <path d="M4.501 19.5a.75.75 0 010-1.5h3v-4.5h-3.75a3.754 3.754 0 01-3.75-3.75c0-1.196.564-2.298 1.505-3a3.733 3.733 0 01-1.505-3A3.754 3.754 0 013.751 0h12a3.754 3.754 0 013.75 3.75 3.732 3.732 0 01-1.506 3.001c.388.289.716.649.965 1.062a.75.75 0 01-1.285.775A2.26 2.26 0 0015.75 7.5h-12C2.509 7.5 1.5 8.509 1.5 9.75S2.51 12 3.751 12h6a.75.75 0 010 1.5h-.75v5.25a.75.75 0 01-.75.75h-3.75zm-.75-18c-1.241 0-2.25 1.009-2.25 2.25S2.51 6 3.751 6h12c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25h-12z" />,
    <path d="M17.251 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.973 24 17.251 24zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.146 12 17.251 12z" />,
    <path d="M17.251 18a.75.75 0 01-.75-.75v-2.652a.75.75 0 011.5 0V16.5h1.902a.75.75 0 010 1.5h-2.652z" />
  );

export default SvgServerClock1;
