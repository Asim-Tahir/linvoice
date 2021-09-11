import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// import { invoiceSlice } from "@/store/invoice";
import { Email, Invoice } from "@linvoice/store/types";

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    email: {} as Email,
  },
  reducers: {
    send: {
      prepare(action: PayloadAction<{ email: Email; invoice: Invoice }>) {
        return { payload: { ...action.payload, id: nanoid() } };
      },
      reducer(
        state,
        action: PayloadAction<{ email: Email; invoice: Invoice }>
      ) {
        // mg.messages.create("", action.payload.email);
      },
    },
  },
  // extraReducers: {
  //   [invoiceSlice.actions.add.type]: (
  //     state,
  //     action: PayloadAction<{ email: Email; invoice: Invoice }>
  //   ) => {
  //     // mg.messages.create("", action.payload.email);
  //   },
  // },
});

export const emailReducer = emailSlice.reducer;
export const emailActions = emailSlice.actions;
