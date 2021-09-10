import { configureStore } from "@reduxjs/toolkit";

import { invoiceReducer, serviceReducer } from "@/store/invoice";
import { reducer as emailReducer } from "@/store/email";

const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    service: serviceReducer,
    email: emailReducer,
  },
});

export default store;

export * from "./invoice";
export { actions as emailActions, emailSlice } from "./email";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
