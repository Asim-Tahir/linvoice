import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

import { Invoice, Service } from "@linvoice/types";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [] as Array<Invoice>,
  },
  reducers: {
    addInvoice: {
      prepare(action: PayloadAction<Invoice>) {
        return { payload: { ...action.payload, id: nanoid() } };
      },
      reducer(state, action: PayloadAction<Invoice>) {
        state.invoices.push(action.payload);
      },
    },
    removeInvoice(state, action: PayloadAction<string>) {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload
      );
    },
    updateInvoice(
      state,
      action: PayloadAction<{ id: string; invoice: Invoice }>
    ) {
      state.invoices = state.invoices.map((invoice) => {
        if (invoice.id === action.payload.id) {
          return { ...invoiceSlice, ...action.payload.invoice };
        }
        return invoice;
      });
    },
    addService: {
      prepare(action: PayloadAction<Service>) {
        return { payload: { ...action.payload, id: nanoid() } };
      },
      reducer(state, action: PayloadAction<Service>) {
        state.invoices.map((invoice) => {
          if (invoice.id === action.payload.invoiceId) {
            invoice.services.push(action.payload);
          }
          return invoice;
        });
      },
    },
    updateService(state, action: PayloadAction<Service>) {
      state.invoices.map((invoice) => {
        if (invoice.id === action.payload.invoiceId) {
          invoice.services = invoice.services.map((service) => {
            if (service.id === action.payload.id) {
              return { ...service, ...action.payload };
            }
            return service;
          });
        }
        return invoice;
      });
    },
    removeService(state, action: PayloadAction<string>) {
      state.invoices.map((invoice) => {
        if (invoice.id === action.payload) {
          invoice.services = invoice.services.filter(
            (service) => service.id !== action.payload
          );
        }
        return invoice;
      });
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getInvoice(state, action: PayloadAction<string>) {
      return state.invoices.find((invoice) => invoice.id === action.payload);
    },
  },
  // extraReducers: {
  //   [serviceSlice.actions.add.type]: (
  //     state,
  //     action: PayloadAction<{ id: string; serviceId: string }>
  //   ) => {
  //     state.invoices.map((invoice) => {
  //       if (invoice.id === action.payload.id) {
  //         // invoice.services.filter((service) => service.id === action.payload.serviceId);
  //       }
  //       return invoice;
  //     });
  //   },
  // },
});

export const invoiceReducer = invoiceSlice.reducer;
export const invoiceActions = invoiceSlice.actions;
