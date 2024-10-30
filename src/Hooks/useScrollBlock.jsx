import React, { useEffect } from "react";

function useScrollBlock(scrollBlock) {
  useEffect(() => {
    console.log(scrollBlock);
    if (scrollBlock) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [scrollBlock]);
}

export default useScrollBlock;
