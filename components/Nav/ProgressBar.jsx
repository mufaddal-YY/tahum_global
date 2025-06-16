"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBars = () => {
  return (
    <ProgressBar
      height="4px"
      color="#D7AF28"
      options={{ showSpinner: false, easing: "ease" }}
      shallowRouting
    />
  );
};

export default ProgressBars;
