import { configureStore } from "@reduxjs/toolkit";

import { invoiceReducer, serviceReducer } from "./invoice";
import { emailReducer } from "./email";

const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    service: serviceReducer,
    email: emailReducer,
  },
});

export default store;

export * from "./invoice";
export { emailActions, emailReducer, emailSlice } from "./email";
export {
  invoiceActions,
  invoiceSlice,
  serviceActions,
  serviceSlice,
  invoiceReducer,
  serviceReducer,
} from "./invoice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
