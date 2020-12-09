import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={15.999} r={0.75} />,
    <path d="M8.5 19.499c-.827 0-1.5-.673-1.5-1.5v-12c0-.827.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-7zm0-14a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-7z" />,
    <path d="M12 23.999c-.457 0-.905-.08-1.332-.237l-1.122-.414C4.498 21.57 1.062 16.775 1 11.417V3.774a2.032 2.032 0 011.238-1.866 24.572 24.572 0 019.516-1.91l.25.001.244-.001c3.276 0 6.475.642 9.509 1.909A2.029 2.029 0 0123 3.773v7.639c-.062 5.362-3.5 10.159-8.553 11.94l-1.114.411a3.856 3.856 0 01-1.333.236zM11.776.998c-3.16 0-6.238.616-9.15 1.831A1.032 1.032 0 002 3.776v7.635c.057 4.935 3.226 9.355 7.885 10.996l1.128.416a2.838 2.838 0 001.975.001l1.12-.414c4.665-1.643 7.835-6.065 7.892-11.005V3.774a1.033 1.033 0 00-.629-.946A23.535 23.535 0 0012.266.997l-.26.001h-.23z" />
  );

export default SvgShieldPhone;
