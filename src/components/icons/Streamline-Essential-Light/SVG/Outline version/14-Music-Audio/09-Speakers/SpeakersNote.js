import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakersNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16.75 11.113c-.965 0-1.75-.785-1.75-1.75a1.752 1.752 0 012.5-1.58v-2.95c0-.646.413-1.218 1.026-1.422l3.024-.841a1.497 1.497 0 011.872.956c.052.153.078.312.078.474v3.613a.38.38 0 01-.009.082 1.752 1.752 0 01-1.741 1.918c-.965 0-1.75-.785-1.75-1.75a1.752 1.752 0 012.5-1.58V4a.498.498 0 00-.277-.447.5.5 0 00-.382-.027l-3.024.841a.495.495 0 00-.317.466v4.28a.38.38 0 01-.009.082 1.752 1.752 0 01-1.741 1.918zm0-2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm5-1.5a.75.75 0 100 1.5.75.75 0 000-1.5z" />,
    <path d="M2 24c-.827 0-1.5-.673-1.5-1.5v-21C.5.673 1.173 0 2 0h14c.827 0 1.5.673 1.5 1.5V2a.5.5 0 01-1 0v-.5A.5.5 0 0016 1H2a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-9a.5.5 0 011 0v9c0 .827-.673 1.5-1.5 1.5H2z" />,
    <path d="M9 21.5c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zm0-10c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM9 9C7.346 9 6 7.654 6 6s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />,
    <path d="M9 18c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 000 2 1.001 1.001 0 000-2z" />,
    <circle cx={9} cy={6} r={0.75} />
  );

export default SvgSpeakersNote;
