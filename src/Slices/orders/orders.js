import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrdersAsync } from "./ordersAPI";

const initialState = {
  order: {},
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

  reducer: {
    setOrderDateTime: (state, action) => {
      state.order.dateTime = action.payload;
    },
    setUserId: (state, action) => {
      state.order.userId = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.order.paymentMethod = action.payload;
    },
    setTourScheduleId: (state, action) => {
      state.order.scheduleId = action.payload;
    },
    setPrice: (state, action) => {
      state.order.price = action.payload;
    },
  },
});

export const {
  setOrderDateTime,
  setPaymentMethod,
  setUserId,
  setTourScheduleId,
  setPrice,
} = orders.actions;

export const selectOrders = (state) => state.orders.orders;

export default orders.reducer;
