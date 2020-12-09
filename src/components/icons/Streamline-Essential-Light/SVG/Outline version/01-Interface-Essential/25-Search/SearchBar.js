import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21.5 16.5a.5.5 0 01-.354-.146l-1.826-1.825a3.914 3.914 0 01-2.396.822c-2.164 0-3.925-1.761-3.925-3.925S14.761 7.5 16.925 7.5s3.925 1.761 3.925 3.925c0 .867-.29 1.709-.822 2.396l1.825 1.826a.5.5 0 01-.353.853zm-4.575-8A2.928 2.928 0 0014 11.425c0 1.613 1.312 2.925 2.925 2.925s2.925-1.312 2.925-2.925A2.928 2.928 0 0016.925 8.5z" />,
    <path d="M1.5 18.5C.673 18.5 0 17.827 0 17V7c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5h-21zm0-12A.5.5 0 001 7v10a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-21z" />
  );

export default SvgSearchBar;
