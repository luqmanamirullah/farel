import { useEffect, useState } from "react";

function useMedia(queries, values, defaultValue) {
  if (typeof window == "undefined") return false;
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);

  return value;
}

const useMediaQuery = (query) => {
  if (typeof window == "undefined") return false;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const handler = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return match;
};

export default useMedia;
export { useMediaQuery };
