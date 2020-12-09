import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={15.375} cy={14.625} r={1.125} />,
    <path d="M12.75 24a2.253 2.253 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v9A2.252 2.252 0 0121.75 24h-9zm9-1.5a.75.75 0 00.75-.75v-.523l-2.266-3.398-2 2.853a.753.753 0 01-.616.32.743.743 0 01-.466-.165l-1.238-.989L14.15 22.5h7.6zm-9-10.5a.75.75 0 00-.75.75v9c0 .286.161.538.406.664l2.261-3.398a1.488 1.488 0 011.249-.667c.34 0 .673.117.937.329l.613.49 1.542-2.197a1.492 1.492 0 011.523-.61c.393.079.731.306.953.639l1.018 1.526V12.75a.75.75 0 00-.75-.75H12.75zM6 7.5c-2.068 0-3.75-1.682-3.75-3.75S3.932 0 6 0s3.75 1.682 3.75 3.75S8.068 7.5 6 7.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S4.759 6 6 6s2.25-1.009 2.25-2.25S7.241 1.5 6 1.5z" />,
    <path d="M3.75 24a.747.747 0 01-.746-.675L2.321 16.5H.75a.75.75 0 01-.75-.75V13.5c0-1.602.656-3.164 1.801-4.285A5.964 5.964 0 015.985 7.5h.075a5.96 5.96 0 014.226 1.801c.14.143.216.332.214.533a.745.745 0 01-.75.742.746.746 0 01-.536-.225A4.478 4.478 0 006.75 9.068v5.182a.75.75 0 01-1.5 0V9.062a4.417 4.417 0 00-2.399 1.224A4.523 4.523 0 001.5 13.5V15H3c.387 0 .708.29.746.675l.683 6.825h3.143l.255-2.558a.755.755 0 01.828-.671.738.738 0 01.5.271c.127.155.186.35.166.549l-.323 3.233A.75.75 0 018.25 24h-4.5z" />
  );

export default SvgSingleManActionsImage;
