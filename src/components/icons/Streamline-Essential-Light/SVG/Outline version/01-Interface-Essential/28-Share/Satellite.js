import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSatellite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.1 24a1.496 1.496 0 01-1.495-1.395 1.49 1.49 0 01.364-1.089l5.23-6.028C3.381 11.331 3.179 4.952 6.756.554a1.486 1.486 0 011.159-.555c.404 0 .78.155 1.062.435l3.093 3.065h4.642A2.505 2.505 0 0119 1.999c1.378 0 2.5 1.121 2.5 2.5 0 .994-.596 1.893-1.5 2.288v4.57l3.057 3.029a1.494 1.494 0 01.438 1.207 1.489 1.489 0 01-.538 1.014 11.472 11.472 0 01-7.296 2.643c-1.628 0-3.233-.351-4.709-1.023l2.876 3.283A1.5 1.5 0 0112.7 24H3.1zm-.376-1.828a.498.498 0 00.377.828H12.7a.497.497 0 00.375-.83l-5.201-5.937-5.15 5.939zm5.579-6.975a10.372 10.372 0 007.358 3.054c2.415 0 4.78-.857 6.658-2.413a.498.498 0 00.067-.704l-.031-.033L8.273 1.144a.494.494 0 00-.352-.145l-.003-.25.001.25a.497.497 0 00-.387.186 10.39 10.39 0 00.766 14.007l.005.005zM19 10.367V6.999c-.496 0-.968-.143-1.377-.416l-1.215 1.215L19 10.367zm-3.302-3.273l1.218-1.218a2.461 2.461 0 01-.416-1.377h-3.421l2.619 2.595zM19 2.999c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
  );

export default SvgSatellite;
