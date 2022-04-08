import classes from "./scroll.module.css";
import React, { useState } from "react";

const Scroll = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);
  
    return (
    <div className={classes.progress}>
      <div className={classes.style} style={{ width: `${scroll}%` }}></div>
    </div>
  );
};
export default Scroll;
