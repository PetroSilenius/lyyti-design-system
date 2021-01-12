import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.512 17.042a1.502 1.502 0 01-1.501-1.5L7 10.536a1.49 1.49 0 01.434-1.062 1.493 1.493 0 011.058-.444h.018v-.486a3.476 3.476 0 011.014-2.477 3.475 3.475 0 012.47-1.036c.945 0 1.82.36 2.479 1.014a3.475 3.475 0 011.036 2.47v.52a1.503 1.503 0 011.496 1.493v4.983c0 .823-.669 1.496-1.492 1.5l-7.001.031zM8.5 10.03a.503.503 0 00-.5.503l.011 5.009c0 .276.224.501.5.501l6.998-.032a.5.5 0 00.497-.5v-4.98a.5.5 0 00-.5-.495L8.5 10.03zm6.01-.996v-.517a2.482 2.482 0 00-.74-1.762 2.483 2.483 0 00-1.759-.724l-.013-.25.001.25a2.483 2.483 0 00-1.764.74 2.48 2.48 0 00-.725 1.771v.489l5 .003z" />,
    <path d="M12.014 15.03a.5.5 0 01-.5-.498l-.008-2.187-.033-.03a.746.746 0 01-.224-.528c0-.417.336-.756.749-.757a.78.78 0 01.529.215.746.746 0 01-.021 1.087l.008 2.196a.497.497 0 01-.498.502h-.002z" />,
    <path d="M12.004 24.03c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11 0 6.066 4.935 11 11 11s11-4.935 11-11-4.935-11-11-11z" />
  );

export default SvgLockCircle;