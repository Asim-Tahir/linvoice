import { configureStore } from "@reduxjs/toolkit";

import { email, servicesStore, invoicesStore } from "@linvoice/store";

export default configureStore({
  reducer: {
    invoices: invoicesStore.reducer,
    services: servicesStore.reducer,
    email: email.reducer,
  },
});
