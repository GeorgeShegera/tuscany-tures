import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrdersAsync } from "./ordersAPI";

const initialState = {
  orders: [],
};

export const getOrders = createAsyncThunk("orders/getOrders", async (token) => {
  const response = await getOrdersAsync(token);
  console.log(response);
  return response.data;
});

const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export const {} = orders.actions;
export const selectOrders = (state) => state.orders.orders;

export default orders.reducer;
