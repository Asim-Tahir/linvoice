import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { Email, Invoice } from "@linvoice/store/types";

const emailSlice = createSlice({
  name: "email",
  initialState: {} as Email,
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

export default {
  slice: emailSlice,
  actions: emailSlice.actions,
  reducer: emailSlice.reducer,
};
