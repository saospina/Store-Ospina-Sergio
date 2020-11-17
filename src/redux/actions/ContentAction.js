export const SHOW_LIST_PRODUCTS = "SHOW_LIST_PRODUCTS";

// action creator
export const showListProducts = (listProducts) => ({
    type: SHOW_LIST_PRODUCTS,
    payload: { listProducts }
  });