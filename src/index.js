import React, { useState, useEffect } from "react";

export default function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState == "visible") {
        if (!visible) {
          setCount(count + 1);
          setVisible(true);
        }
      } else setVisible(false);
    });
  });

  function onVisibilityChange(callback) {
    document.addEventListener("visibilitychange", function () {
      let isVisible = document.visibilityState;
      callback(isVisible);
    });
  }

  let obj = {
    count: count,
    visible: visible,
    onVisibilityChange: onVisibilityChange,
  };
  return obj;
}
