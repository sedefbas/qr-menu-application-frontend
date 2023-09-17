import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
    productID: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: state.productID,
        productName: action.payload.productName,
        productPrice: action.payload.productPrice,
        productCategory: action.payload.productCategory,
      };
      state.products.push(newProduct);
      state.productID += 1;
    },
    deleteProduct: (state, action) => {
      state.products = [
        ...state.products.filter((product) => product.id != action.payload),
      ];
    },
    updateProduct: (state, action) => {
      state.products = [
        ...state.products.map((product) =>
          product.id == action.payload.id
            ? { ...product, ...action.payload }
            : product
        ),
      ];
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
