/**
 * Helper to parse a formatted FCFA price string into a numeric value.
 * Example: "649 000 FCFA" -> 649000
 */
export const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
};

/**
 * Helper to format a numeric value into a standard FCFA price string.
 * Example: 649000 -> "649 000 FCFA"
 */
export const formatPrice = (priceNum: number): string => {
  const rounded = Math.round(priceNum);
  // Add spaces as thousands separators
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${formatted} FCFA`;
};
