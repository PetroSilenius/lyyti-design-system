import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7 19.5a.5.5 0 01-.258-.072L5.49 18.68C.31 15.59 0 15.405 0 12c0-3.401.414-3.648 5.476-6.671l1.267-.758A.502.502 0 017 4.5h12.5c2.481 0 4.5 3.365 4.5 7.5s-2.019 7.5-4.5 7.5H7zm12.5-14C17.57 5.5 16 8.416 16 12s1.57 6.5 3.5 6.5S23 15.584 23 12s-1.57-6.5-3.5-6.5zm-5.308 10.353C14.858 17.51 15.907 18.5 17 18.5h.246C15.864 17.178 15 14.727 15 12s.864-5.178 2.246-6.5H17c-1.93 0-3.5 2.916-3.5 6.5 0 1.36.229 2.666.662 3.777a.401.401 0 01.03.076zm-5.704.647c.664 1.277 1.566 2 2.512 2h3.748c-.525-.504-.985-1.183-1.351-2H8.488zM8 5.5c-1.93 0-3.5 2.916-3.5 6.5s1.57 6.5 3.5 6.5h.747c-.581-.558-1.08-1.327-1.464-2.263a.517.517 0 01-.039-.094C6.757 14.914 6.5 13.481 6.5 12c0-1.437.243-2.832.704-4.038a.496.496 0 01.112-.278c.379-.9.866-1.642 1.431-2.184H8zM4.643 6.994C1 9.191 1 9.422 1 12c0 2.631 0 2.82 3.645 5.01C3.91 15.646 3.5 13.88 3.5 12c0-1.878.409-3.643 1.143-5.006zm8.374 8.506a11.623 11.623 0 01-.506-3h-5c.045 1.068.232 2.096.548 3h4.958zm-.506-4c.042-1.05.215-2.076.506-3H8.059a10.547 10.547 0 00-.548 3h5zm.885-4c.367-.818.826-1.496 1.351-2H11c-.946 0-1.848.724-2.512 2h4.908z" />
  );

export default SvgLensHorizontal;
