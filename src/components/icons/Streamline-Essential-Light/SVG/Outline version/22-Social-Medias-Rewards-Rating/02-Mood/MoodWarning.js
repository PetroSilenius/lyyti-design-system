import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12.504 14.5a.5.5 0 01-.5-.5V7a.5.5 0 011 0v7a.5.5 0 01-.5.5z" />,
    <circle cx={12.501} cy={17.25} r={0.75} />,
    <path d="M12.006 24.001a4.52 4.52 0 01-3.983-2.397 4.5 4.5 0 01-1.327.198c-.62 0-1.22-.124-1.785-.368a4.504 4.504 0 01-2.515-5.458 4.55 4.55 0 01-2.079-2.318 4.503 4.503 0 012.08-5.638 4.554 4.554 0 01.169-3.112 4.467 4.467 0 012.473-2.397 4.477 4.477 0 012.986-.117A4.55 4.55 0 0110.343.315a4.458 4.458 0 011.654-.317c1.67 0 3.21.934 3.984 2.397a4.488 4.488 0 011.326-.198 4.503 4.503 0 014.3 5.825A4.446 4.446 0 0124.001 12a4.45 4.45 0 01-2.396 3.979 4.551 4.551 0 01-.169 3.111 4.5 4.5 0 01-4.137 2.715 4.48 4.48 0 01-1.321-.199 4.55 4.55 0 01-2.318 2.079 4.465 4.465 0 01-1.654.316zm-3.723-3.524a.5.5 0 01.464.315 3.484 3.484 0 003.258 2.209 3.51 3.51 0 003.248-2.209.501.501 0 01.663-.274 3.502 3.502 0 004.601-4.602.507.507 0 01-.003-.39.504.504 0 01.277-.273A3.482 3.482 0 0023 12c0-1.443-.866-2.72-2.208-3.253a.498.498 0 01-.274-.663 3.504 3.504 0 00-1.824-4.601 3.475 3.475 0 00-1.389-.286c-.482 0-.949.096-1.388.286a.498.498 0 01-.663-.275A3.484 3.484 0 0011.996.999a3.51 3.51 0 00-3.247 2.208.501.501 0 01-.663.274 3.484 3.484 0 00-2.679-.042 3.485 3.485 0 00-1.923 1.866 3.51 3.51 0 000 2.778.498.498 0 01-.274.663 3.503 3.503 0 00-1.962 4.544 3.51 3.51 0 001.962 1.962.503.503 0 01.275.663c-.37.857-.384 1.808-.039 2.678a3.481 3.481 0 003.251 2.21c.482 0 .949-.096 1.388-.286a.519.519 0 01.198-.04z" />
  );

export default SvgMoodWarning;
