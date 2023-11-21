import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
};

const ProductsV2Slice = createSlice({
  name: "productsV2",
  initialState,
  reducers: {
    getProducts: (state) => {
      console.log("3. getProduct");
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    },
    getProductsFailed: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailed } =
ProductsV2Slice.actions;

export default ProductsV2Slice.reducer;