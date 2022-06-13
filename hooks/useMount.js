import { useEffect } from "react";

export const useMount = func => {
  useEffect(() => {
    func();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useUnmount = func => {
  useEffect(() => {
    return () => {
      func();
    };
  });
};
