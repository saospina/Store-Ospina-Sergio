export const SHOW_MOST_RECENT_PRODUCTS = "SHOW_MOST_RECENT_PRODUCTS";
export const SHOW_LOWEST_PRICE_PRODUCTS = "SHOW_LOWEST_PRICE_PRODUCTS";
export const SHOW_HIGHEST_PRICE_PRODUCTS = "SHOW_HIGHEST_PRICE_PRODUCTS";

// action creator
export const showMostRecentProducts = (mostRecentProducts) => ({
  type: SHOW_MOST_RECENT_PRODUCTS,
  payload: { mostRecentProducts }
});
export const showLowestPriceProducts = (lowestPriceProducts) => ({
  type: SHOW_LOWEST_PRICE_PRODUCTS,
  payload: { lowestPriceProducts }
});
export const showHighesttPriceProducts = (highestPriceProducts) => ({
  type: SHOW_HIGHEST_PRICE_PRODUCTS,
  payload: { highestPriceProducts }
});