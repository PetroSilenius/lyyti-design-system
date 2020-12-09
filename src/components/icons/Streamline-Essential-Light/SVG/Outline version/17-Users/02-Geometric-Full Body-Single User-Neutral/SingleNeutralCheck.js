import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.5 13c-3.584 0-6.5-2.916-6.5-6.5S13.916 0 17.5 0a.5.5 0 010 1C14.467 1 12 3.467 12 6.5s2.467 5.5 5.5 5.5S23 9.533 23 6.5a.5.5 0 011 0c0 3.584-2.916 6.5-6.5 6.5z" />,
    <path d="M17.5 8.189c-.333 0-.647-.13-.883-.365l-1.721-1.72a.5.5 0 01.707-.708l1.72 1.719a.245.245 0 00.177.073.242.242 0 00.176-.073l5.47-5.469A.5.5 0 0124 2a.5.5 0 01-.146.354l-5.47 5.469c-.236.235-.55.366-.884.366zM3.5 24a.502.502 0 01-.498-.458L2.54 18H.5a.5.5 0 01-.5-.5V14c0-3.033 2.467-5.5 5.5-5.5S11 10.967 11 14v3.5a.5.5 0 01-.5.5H8.46l-.462 5.542A.502.502 0 017.5 24h-4zm3.54-1l.462-5.542A.502.502 0 018 17h2v-3c0-2.481-2.019-4.5-4.5-4.5S1 11.519 1 14v3h2c.258 0 .477.201.498.458L3.96 23h3.08zM5.5 8c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
  );

export default SvgSingleNeutralCheck;
