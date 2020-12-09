import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.499 18c-.827 0-1.5-.673-1.5-1.5v-15c0-.827.673-1.5 1.5-1.5h5.382a1.49 1.49 0 011.341.83l.948 1.893A.496.496 0 009.617 3h9.882c.827 0 1.5.673 1.5 1.5v5a.5.5 0 01-1 0v-5a.5.5 0 00-.5-.5H9.617a1.492 1.492 0 01-1.342-.83l-.947-1.893A.498.498 0 006.88 1H1.499a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h8a.5.5 0 010 1h-8z" />,
    <circle cx={17.499} cy={20.75} r={0.75} />,
    <path d="M17.499 19a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z" />,
    <path d="M12.443 23.997a1.43 1.43 0 01-1.281-2.094l5.055-9.635a1.45 1.45 0 012.556-.01l5.062 9.645c.233.443.214.982-.048 1.408a1.44 1.44 0 01-1.231.686H12.443zm5.055-11.5a.446.446 0 00-.396.238l-5.054 9.632a.426.426 0 00.014.419c.082.131.224.21.379.21h10.114a.451.451 0 00.382-.212.422.422 0 00.013-.417l-5.056-9.635a.446.446 0 00-.396-.235z" />
  );

export default SvgFolderWarning;
