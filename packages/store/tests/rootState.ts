import { EntityState, DeepPartial } from "@reduxjs/toolkit";

import type {
  Invoice,
  Service,
  InvoiceInput,
  ServiceInput,
} from "@linvoice/store/types";

export default {
  invoices: {
    ids: ["iyI0NuErkN", "9vJmLUju8U"],
    entities: {
      iyI0NuErkN: {
        id: "iyI0NuErkN",
        to: {
          name: "Jodie Luettgen",
          job: "Customer Implementation Associate",
        },
        from: {
          name: "Kelvin Schowalter",
          job: "Senior Cost Accountant",
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "paid",
        dueDate: "Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)",
      },
      "9vJmLUju8U": {
        id: "9vJmLUju8U",
        to: {
          name: "Bethel Quitzon",
          job: "Dynamic Web Strategist",
        },
        from: {
          name: "Jon Dietrich",
          job: "Legacy Creative Planner",
        },
        status: "paid",
        dueDate: "Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
  },
  invoiceForm: {
    from: {
      name: "Nakia Kihn",
      job: "Central Interactions Coordinator",
    },
    to: {
      name: "Assunta Grady",
      job: "Investor Operations Specialist",
    },
    status: "paid",
    dueDate: "Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  services: {
    ids: ["di2hAjfkfk", "60zRAR9R9d"],
    entities: {
      di2hAjfkfk: {
        id: "di2hAjfkfk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        invoiceID: "iyI0NuErkN",
        price: 425.25,
        product: "Lorem Ipsum dolor",
      },
      "60zRAR9R9d": {
        id: "60zRAR9R9d",
        invoiceID: "9vJmLUju8U",
        price: 258.84,
        product: "Loremi idsum color imet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
  },
  serviceForm: {
    invoiceID: "di2hAjfkfk",
    price: 251.12,
    product: "Loref kitsum olorimet ilasum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
} as {
  invoices: EntityState<Invoice>;
  services: EntityState<Service>;
  invoiceForm: DeepPartial<InvoiceInput>;
  serviceForm: DeepPartial<ServiceInput>;
};
