import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M.5 24a.5.5 0 01-.5-.5V.5a.5.5 0 011 0v2.333A22.3 22.3 0 016.487 2c1.578 0 3.516.517 5.39 1.016C13.691 3.5 15.565 4 17 4a16.82 16.82 0 005.011-.978A1.502 1.502 0 0124 4.439v13.878c0 .623-.392 1.189-.976 1.406a18.964 18.964 0 01-6 1.275h-.001c-1.591 0-3.528-.517-5.401-1.017C9.807 19.499 7.934 19 6.5 19c-1.852.047-3.703.34-5.5.873V23.5a.5.5 0 01-.5.5zm5.994-6c1.572 0 3.51.517 5.385 1.017 1.815.484 3.688.983 5.121.983a17.92 17.92 0 005.667-1.21.507.507 0 00.333-.471V4.44a.497.497 0 00-.5-.5.576.576 0 00-.16.026A17.789 17.789 0 0117.02 5h-.001c-1.586 0-3.524-.517-5.398-1.016C9.809 3.5 7.935 3 6.5 3c-1.858.047-3.709.34-5.5.87v14.959A22.344 22.344 0 016.487 18h.007z" />,
    <path d="M12.5 16A4.505 4.505 0 018 11.5C8 9.019 10.019 7 12.5 7S17 9.019 17 11.5 14.981 16 12.5 16zm0-8C10.57 8 9 9.57 9 11.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5S14.43 8 12.5 8z" />,
    <path d="M11.943 13.62a.99.99 0 01-.708-.295l-.998-.998a.5.5 0 11.708-.708l1 1 1.938-2.582a.504.504 0 01.7-.1c.22.166.265.48.1.7l-1.937 2.582a.992.992 0 01-.803.401z" />
  );

export default SvgFlagCheck;