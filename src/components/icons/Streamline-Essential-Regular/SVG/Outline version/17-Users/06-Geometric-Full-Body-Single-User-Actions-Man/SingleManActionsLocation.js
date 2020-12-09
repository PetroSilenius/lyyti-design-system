import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={18.75} cy={15.812} r={1.125} />,
    <path d="M18.749 23.986a1.487 1.487 0 01-1.18-.574c-1.856-2.375-4.069-5.621-4.069-7.601a5.256 5.256 0 015.25-5.249 5.256 5.256 0 015.25 5.25c0 1.981-2.212 5.226-4.068 7.599a1.493 1.493 0 01-1.183.575zm.001-11.924A3.754 3.754 0 0015 15.811c0 1.159 1.437 3.717 3.75 6.676 2.314-2.958 3.75-5.515 3.75-6.675a3.754 3.754 0 00-3.75-3.75zM6 7.5c-2.068 0-3.75-1.682-3.75-3.75S3.932 0 6 0s3.75 1.682 3.75 3.75S8.068 7.5 6 7.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S4.759 6 6 6s2.25-1.009 2.25-2.25S7.241 1.5 6 1.5zM3.75 24a.747.747 0 01-.746-.675L2.321 16.5H.75a.75.75 0 01-.75-.75V13.5c0-3.308 2.692-6 6-6s6 2.692 6 6v2.25a.75.75 0 01-.75.75H9.679l-.682 6.825A.748.748 0 018.25 24h-4.5zm3.821-1.5l.682-6.825A.748.748 0 019 15h1.5v-1.5c0-2.198-1.617-4.072-3.75-4.433v5.183a.75.75 0 01-1.5 0V9.067C3.117 9.428 1.5 11.302 1.5 13.5V15H3c.387 0 .708.29.746.675l.683 6.825h3.142z" />
  );

export default SvgSingleManActionsLocation;
