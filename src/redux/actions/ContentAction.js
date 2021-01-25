export const SHOW_MOST_RECENT_PRODUCTS = "SHOW_MOST_RECENT_PRODUCTS";
export const SHOW_LOWEST_PRICE_PRODUCTS = "SHOW_LOWEST_PRICE_PRODUCTS";
export const SHOW_HIGHEST_PRICE_PRODUCTS = "SHOW_HIGHEST_PRICE_PRODUCTS";
export const REDEEM_BY_PRODUCT = "REDEEM_BY_PRODUCT";
export const SHOW_SPINNER = "SHOW_SPINNER";
export const HIDE_SPINNER = "HIDE_SPINNER";

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

export const redeemByProduct = (redeemedProduct) => ({
  type: REDEEM_BY_PRODUCT,
  payload: { redeemedProduct }
});

export const showSpinner = () => dispatch => {
  dispatch({
    type: "SHOW_SPINNER"
  })
};
export const hideSpinner = () => dispatch => {
  dispatch({
    type: "HIDE_SPINNER"
  })
};