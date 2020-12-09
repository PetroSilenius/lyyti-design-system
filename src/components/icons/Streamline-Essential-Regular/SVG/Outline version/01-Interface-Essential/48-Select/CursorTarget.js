import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.999 23.997a.75.75 0 01-.75-.75v-1.531c-4.758-.367-8.603-4.211-8.969-8.969H.749a.75.75 0 010-1.5H2.28c.367-4.758 4.211-8.603 8.969-8.969V.747a.75.75 0 011.5 0v1.531c4.758.367 8.603 4.211 8.969 8.969h1.531a.75.75 0 010 1.5h-1.531c-.366 4.758-4.211 8.603-8.969 8.969v1.531a.75.75 0 01-.75.75zm.75-3.785c3.928-.359 7.105-3.537 7.465-7.465H17.19a5.287 5.287 0 01-4.441 4.441v3.024zm-8.965-7.465c.359 3.928 3.537 7.105 7.465 7.465v-3.023a5.29 5.29 0 01-4.442-4.441H3.784zm8.965 2.923a3.745 3.745 0 002.923-2.923h-2.923v2.923zm-4.423-2.923a3.745 3.745 0 002.923 2.923v-2.923H8.326zm11.888-1.5c-.359-3.928-3.537-7.105-7.465-7.465v3.023a5.287 5.287 0 014.441 4.442h3.024zm-4.542 0a3.745 3.745 0 00-2.923-2.923v2.923h2.923zm-4.423 0V8.324a3.745 3.745 0 00-2.923 2.923h2.923zm-4.442 0a5.29 5.29 0 014.442-4.442V3.782c-3.928.359-7.105 3.537-7.465 7.465h3.023z" />
  );

export default SvgCursorTarget;
