import { useState, useEffect, useRef } from "react";

export default function useDocumentVisibility() {
  const callbacks = useRef([]);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handler() {
      if (!document.hidden) {
        setCount((count) => count + 1);
      }
      setVisible(!document.hidden);
      callbacks.current.forEach((callback) => {
        callback(!document.hidden);
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
