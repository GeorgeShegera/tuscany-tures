import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrdersAsync } from "./ordersAPI";

const processOrder = localStorage.getItem("processOrder");

const saveProcessOrder = (order) =>
  localStorage.setItem("processOrder", JSON.stringify(order));

const initialState = {
  order:
    processOrder !== null
      ? JSON.parse(processOrder)
      : {
          adultTickets: 0,
          childTickets: 0,
          infantTickets: 0,
        },
  orders: [],
};

export const getOrders = createAsyncThunk("orders/getOrders", async (token) => {
  const response = await getOrdersAsync(token);
  return response.data;
});

const orders = createSlice({
  name: "orders",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },

  reducers: {
    setOrderDateTime: (state, action) => {
      state.order.dateTime = action.payload;
      saveProcessOrder(state.order);
    },
    setPaymentMethod: (state, action) => {
      state.order.paymentMethod = action.payload;
      saveProcessOrder(state.order);
    },
    setPrice: (state, action) => {
      state.order.price = action.payload;
      saveProcessOrder(state.order);
    },
    setAdultTickets: (state, action) => {
      state.order.adultTickets = action.payload;
      saveProcessOrder(state.order);
    },
    setChildTickets: (state, action) => {
      state.order.childTickets = action.payload;
      saveProcessOrder(state.order);
    },
    setInfantTickets: (state, action) => {
      state.order.infantTickets = action.payload;
      saveProcessOrder(state.order);
    },

    removeProcessOrder: () => {
      localStorage.removeItem("processOrder");
    },
  },
});

export const {
  setOrderDateTime,
  setPaymentMethod,
  setUserId,
  setTourScheduleId,
  setPrice,
  setAdultTickets,
  setChildTickets,
  setInfantTickets,
  removeProcessOrder,
} = orders.actions;

export const selectOrders = (state) => state.orders.orders;
export const selectOrder = (state) => state.orders.order;

export default orders.reducer;
