import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import Handlebars from "handlebars";
import _template from "@/email/templates/invoice.html";

const invoice_template = Handlebars.compile<{
  invoice: {
    id: string;
    dueDate: string;
    subTotal: string;
    tax: string;
    total: string;
    from: {
      name: string;
      address: string;
      email: string;
    };
    to: {
      name: string;
      address: string;
      email: string;
    };
  };
  services: Array<{
    name: string;
    description: string;
    quantity: number;
    url: string;
    amount: string;
  }>;
}>(_template);

const body = invoice_template({
  invoice: {
    id: "",
    dueDate: "",
    from: { name: "", email: "", address: "" },
    to: { name: "", email: "", address: "" },
    subTotal: "",
    tax: "",
    total: "",
  },
  services: [
    {
      name: "SEO",
      amount: "₺450.00",
      description: "Optimize the site for search engines (SEO)",
      quantity: 0,
      url: "#",
    },
    {
      name: "Mehmet",
      amount: "₺450.00",
      description: "Optimize the site for search engines (SEO)",
      quantity: 0,
      url: "#mehmet",
    },
  ],
});

// import { invoiceSlice } from "@/store/invoice";
import { Email, Invoice } from "@types";

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

export const reducer = emailSlice.reducer;
export const actions = emailSlice.actions;
