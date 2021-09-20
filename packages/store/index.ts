export { default as invoicesStore } from "./invoices";
export { default as servicesStore } from "./services";
export { default as email } from "./email";

import { default as store } from "./store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
