import React, { useState, useEffect } from "react";

export default function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handler() {
      if (document.visibilityState == "visible") {
        setCount(count => count + 1);
        setVisible(true);
      } else setVisible(false);
    }

    document.addEventListener("visibilitychange", handler);
    return () => {
      document.removeEventListener("visibilitychange", handler);
    };
  }, []);

  function onVisibilityChange(callback) {
    function handler() {
      callback(document.visibilityState);
    }
    document.addEventListener("visibilitychange", handler);
    return () => {
      document.removeEventListener("visibilitychange", handler);
    };
  }

  return { count, visible, onVisibilityChange};
}
