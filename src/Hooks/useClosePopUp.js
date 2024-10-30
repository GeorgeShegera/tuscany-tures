import React, { useEffect } from "react";

function useClosePopUp(ref, closeHandler) {
  useEffect(() => {
    let handler = (e) => {
      if (!ref.current.contains(e.target)) {
        closeHandler();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
}

export default useClosePopUp;
