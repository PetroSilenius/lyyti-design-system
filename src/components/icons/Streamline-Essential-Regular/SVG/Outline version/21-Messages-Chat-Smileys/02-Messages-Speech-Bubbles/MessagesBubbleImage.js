import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={7.959} cy={6.375} r={1.125} />,
    <path d="M5.998 15a.75.75 0 010-1.5h1.12l2.32-3.484a1.487 1.487 0 011.251-.669c.342 0 .664.113.933.328l.613.491 1.541-2.197a1.495 1.495 0 011.524-.61c.393.079.731.307.953.64l3.868 5.834c.01.014.025.041.032.056a.57.57 0 01.06.141.669.669 0 01.032.171.71.71 0 01-.087.401.59.59 0 01-.129.176.738.738 0 01-.294.179l-.04.013a.684.684 0 01-.193.03H5.998zm12.103-1.5l-3.097-4.671-1.999 2.853a.753.753 0 01-.613.319.754.754 0 01-.469-.164l-1.236-.988L8.92 13.5h9.181z" />,
    <path d="M.748 24a.75.75 0 01-.678-1.072l2.911-6.113a11.245 11.245 0 01-1.484-5.596C1.507 5.033 6.547 0 12.733 0h.034c2.101 0 4.155.587 5.94 1.696a11.172 11.172 0 015.011 7c.683 2.93.187 5.946-1.397 8.494a11.176 11.176 0 01-6.998 5.016 11.208 11.208 0 01-8.139-1.189l-6.112 2.911A.777.777 0 01.748 24zM12.733 1.5c-5.36 0-9.727 4.361-9.735 9.721a9.724 9.724 0 001.47 5.158.745.745 0 01.04.719l-2.174 4.567L6.9 19.49a.747.747 0 01.718.041 9.71 9.71 0 007.362 1.214 9.69 9.69 0 006.066-4.347c2.839-4.566 1.434-10.59-3.132-13.428a9.74 9.74 0 00-5.148-1.47h-.033z" />
  );

export default SvgMessagesBubbleImage;
