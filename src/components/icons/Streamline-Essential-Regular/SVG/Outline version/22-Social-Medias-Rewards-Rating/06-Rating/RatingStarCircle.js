import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.749 17.251a1.399 1.399 0 01-1.22-.7 1.418 1.418 0 01-.082-1.253l.996-2.289-1.778-1.585a1.422 1.422 0 01-.444-1.015 1.392 1.392 0 01.404-.993A1.425 1.425 0 017.63 9h1.906l1.197-2.521a1.43 1.43 0 011.27-.79 1.421 1.421 0 011.256.766L14.467 9h1.903c.37 0 .726.143.984.393.269.26.421.609.428.983.006.381-.145.754-.416 1.021l-1.81 1.612.992 2.28a1.41 1.41 0 01-1.294 1.961c-.25 0-.495-.066-.709-.191L12 15.627l-2.555 1.437a1.38 1.38 0 01-.696.187zm1.098-5.001a.75.75 0 01.189.859L8.94 15.628l2.693-1.514a.757.757 0 01.735 0l2.694 1.515-1.096-2.518a.748.748 0 01.189-.86l1.967-1.75h-2.128a.752.752 0 01-.677-.428l-1.314-2.768-1.313 2.768a.752.752 0 01-.677.428h-2.13l1.964 1.749z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />
  );

export default SvgRatingStarCircle;
