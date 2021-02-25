const SM = 576;
const MD = 768;
const LG = 992;
const XL = 1200;

export const SMPX = "576px";
export const MDPX = "768px";
export const LGPX = "992px";
export const XLPX = "1200px";

export const breakpoints = { SM, MD, LG, XL };

/**
 * Fungsi untuk ngeset mediascreen
 * @param {("SM"|"MD"|"LG"|"XL")} type
 */
export const down = (type) => {
  return `@media screen and (max-width: ${breakpoints[type]}px)`;
};
