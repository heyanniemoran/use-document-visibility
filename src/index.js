import React, { useState, useEffect } from "react";

export default function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handler() {
      if (document.visibilityState == "visible") {
        if (!visible) {
          setCount(count + 1);
          setVisible(true);
        }
      } else setVisible(false);
    }

    document.addEventListener("visibilitychange", handler);
    return function cleanup() {
      document.removeEventListener("visibilitychange", handler);
    }
  }, []);

  function onVisibilityChange(callback) {
    document.addEventListener("visibilitychange", function () {
      callback(document.visibilityState);
    });
  }

  return { count, visible, onVisibilityChange};
}
