import { useLayoutEffect } from "react";

export const useScrollFreeze = () => {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      console.log("original", original);
      document.body.style.overflow = original;
    };
  }, []);
};
