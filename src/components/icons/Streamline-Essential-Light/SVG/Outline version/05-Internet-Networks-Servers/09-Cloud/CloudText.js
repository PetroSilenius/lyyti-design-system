import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 14.8a.547.547 0 01-.107-.011A3.673 3.673 0 01.5 10.992a4.034 4.034 0 011.871-3.325 4.047 4.047 0 012.515-.627 7.102 7.102 0 017.024-6.039h.134c2.588 0 5.044 1.454 6.3 3.716 2.806.03 5.114 2.321 5.155 5.134a4.797 4.797 0 01-2.79 4.51.5.5 0 01-.419-.908 3.805 3.805 0 002.21-3.58c-.034-2.294-1.923-4.157-4.21-4.157h-.063l-.157.005h-.002a.507.507 0 01-.471-.276A6.246 6.246 0 0012.04 2h-.118C8.74 2 6.062 4.48 5.823 7.647a.495.495 0 01-.604.45 3.036 3.036 0 00-2.307.412A3.04 3.04 0 001.5 11.028a2.684 2.684 0 002.107 2.784.498.498 0 01.382.596.503.503 0 01-.489.392z" />,
    <path d="M7 23c-.827 0-1.5-.673-1.5-1.5v-10c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5H7zm0-12a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H7z" />,
    <path d="M9 14a.5.5 0 010-1h6a.5.5 0 010 1H9zM9 17a.5.5 0 010-1h6a.5.5 0 010 1H9zM9 20a.5.5 0 010-1h2.25a.5.5 0 010 1H9z" />
  );

export default SvgCloudText;
