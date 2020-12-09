import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.25 7.5C3.182 7.5 1.5 5.818 1.5 3.75S3.182 0 5.25 0 9 1.682 9 3.75 7.318 7.5 5.25 7.5zm0-6C4.009 1.5 3 2.509 3 3.75S4.009 6 5.25 6 7.5 4.991 7.5 3.75 6.491 1.5 5.25 1.5zM3 24a.747.747 0 01-.746-.675L1.571 16.5H.75a.75.75 0 01-.75-.75v-3C0 9.855 2.355 7.5 5.25 7.5s5.25 2.355 5.25 5.25v3a.75.75 0 01-.75.75h-.821l-.682 6.825A.748.748 0 017.5 24H3zm3.821-1.5l.682-6.825A.748.748 0 018.25 15H9v-2.25c0-1.781-1.288-3.32-3-3.672v5.172a.75.75 0 01-1.5 0V9.078c-1.712.352-3 1.892-3 3.672V15h.75c.387 0 .708.29.746.675l.683 6.825h3.142zM17.25 13.5c-3.722 0-6.75-3.028-6.75-6.75S13.528 0 17.25 0a.75.75 0 010 1.5C14.355 1.5 12 3.855 12 6.75S14.355 12 17.25 12s5.25-2.355 5.25-5.25a.75.75 0 011.5 0 6.758 6.758 0 01-6.75 6.75z" />,
    <path d="M17.25 8.689c-.4 0-.776-.156-1.059-.438l-1.721-1.72A.752.752 0 0115 5.25c.2 0 .388.078.53.219l1.72 1.719 5.469-5.47a.744.744 0 011.06 0c.143.142.221.331.221.531s-.078.389-.22.53l-5.47 5.47c-.282.283-.659.44-1.06.44.001 0 0 0 0 0z" />
  );

export default SvgSingleManCheck;
