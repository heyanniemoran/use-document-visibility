import React, { useState, useEffect } from "react";

export default function useDocumentVisibility() {
  const callbacks = useRef([]);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handler() {
      const newVisible = document.visibilityState === "visible";
      if (newVisible) {
        setCount((count) => count + 1);
      }
      setVisible(newVisible);
      callbacks.current.forEach((el) => {
        el(newVisible);
      });
    }

    document.addEventListener("visibilitychange", handler);
    return () => {
      document.removeEventListener("visibilitychange", handler);
    };
  }, []);

  function onVisibilityChange(callback) {
    callbacks.current.push(callback);
    return () => {
      const index = callbacks.current.indexOf(callback);
      if (index > -1) {
        callbacks.current.splice(index, 1);
      }
    };
  }

  return { count, visible, onVisibilityChange};
}
