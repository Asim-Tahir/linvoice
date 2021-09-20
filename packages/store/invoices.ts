import {
  createSlice,
  createEntityAdapter,
  createDraftSafeSelector,
  EntityState,
  OutputSelector,
  PayloadAction,
} from "@reduxjs/toolkit";

import type {
  Invoice,
  InvoiceInput,
  Service,
  InvoiceStatus,
} from "@linvoice/store/types";
import { generateID } from "@linvoice/utils";

interface RootState {
  invoices: EntityState<Invoice>;
  services: EntityState<Service>;
}

const invoicesAdapter = createEntityAdapter<Invoice>({
  selectId: (invoice) => invoice.id,
  sortComparer: (i1, i2) => i1.description.localeCompare(i2.description),
});

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: invoicesAdapter.getInitialState({
    ids: [
      "WQY4Gx8NpW",
      "SUTuvRtmH4",
      "KyEqa9FcKo",
      "5QT2piK8dt",
      "Xeb8VguPLt",
      "mkrKj80Wbj",
      "dcvpqH75dr",
      "CjXbfaA9Zf",
      "lOekt1xtXM",
      "jJAGOpOSl8",
      "wXFpsUHm23",
      "7zPVd4stg9",
    ],
    entities: {
      WQY4Gx8NpW: {
        id: "WQY4Gx8NpW",
        to: {
          name: "Chandler Jacobi",
          company: "Loinese",
          email: "chandler@loinese.com",
          job: "Direct Security Executive",
        },
        from: {
          name: "Kurtis Lehner",
          company: "Kemmer",
          email: "kurtis@kemmer.co.uk",
          job: "Senior Quality Engineer",
        },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem harum nemo corporis sed, deleniti maiores repellendus eos nisi beatae error inventore porro architecto voluptatem.",
        totalAmount: 0,

        status: "pending",
        dueDate: "Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",
      },
      SUTuvRtmH4: {
        id: "SUTuvRtmH4",
        from: {
          name: "Monserrat Marquardt",
          job: "Forward Accountability Producer",
          company: "ScHeel Electricity",
          email: "monserrat@scheel.com",
        },
        to: {
          name: "Krystel Schmitt",
          job: "Senior Branding Executive",
          company: "Hane-Kuhic",
          email: "krystell@hane-kuhic.com",
        },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem harum nemo corporis sed, deleniti maiores repellendus eos nisi beatae error inventore porro architecto voluptatem.",
        totalAmount: 0,

        status: "paid",
        dueDate: "Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)",
      },
      KyEqa9FcKo: {
        id: "KyEqa9FcKo",
        from: {
          name: "Corine Abernathy",
          job: "Chief Factors Planner",
          company: "Lamanias",
          email: "corine@lamanias.com",
        },
        to: {
          name: "Lorenz Lehner",
          job: "Dynamic Branding Facilitator",
          company: "Bergnaum-Kilback",
          email: "lorenz@bergnaum.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "pending",
        dueDate: "Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)",
      },
      "5QT2piK8dt": {
        id: "5QT2piK8dt",
        from: {
          name: "Lauriane Kulas",
          job: "Senior Accounts Officer",
          company: "Kuhic",
          email: "lauriane@kuhic.com",
        },
        to: {
          name: "Toby Schmitt",
          job: "Dynamic Branding Analyst",
          company: "Losi",
          email: "toby@losi.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "outstanding",
        dueDate: "Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)",
      },
      Xeb8VguPLt: {
        id: "Xeb8VguPLt",
        from: {
          name: "Everette Botsford",
          job: "Product Group Architect",
          company: "Immerse",
          email: "everette@immerse.com",
        },
        to: {
          name: "Jennie Schmitt",
          job: "Forward Branding Executive",
          company: "Limo",
          email: "jennie@limo.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "paid",
        dueDate: "Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)",
      },
      mkrKj80Wbj: {
        id: "mkrKj80Wbj",
        from: {
          name: "Krystel Jones",
          job: "Future Security Planner",
          company: "Kronian",
          email: "Krystel@kronian.com",
        },
        to: {
          name: "David Kulas",
          job: "Raw Markets Analyst",
          company: "Oilers",
          email: "david@oilers.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "outstanding",
        dueDate: "Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)",
      },
      dcvpqH75dr: {
        id: "dcvpqH75dr",
        from: {
          name: "Ceasar Sauer",
          job: "Direct Brand Specialist",
          company: "Bergnaum",
          email: "ceaser@bergnaum.co.uk",
        },
        to: {
          name: "Lorenz Lehner",
          job: "Senior Branding Facilitator",
          company: "Bergnaum-Kilback",
          email: "lehner@bergnaum.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "late",
        dueDate: "Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)",
      },
      CjXbfaA9Zf: {
        id: "CjXbfaA9Zf",
        from: {
          name: "Rae McDermott",
          job: "Lead Branding Engineer",
          company: "Kroilan",
          email: "rae@kroilan.com",
        },
        to: {
          name: "Abraham Kulas",
          job: "Senior Branding Facilitator",
          company: "Kulas",
          email: "abraham@kulas.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "outstanding",
        dueDate: "Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)",
      },
      lOekt1xtXM: {
        id: "lOekt1xtXM",
        from: {
          name: "Julian Glover",
          job: "Global Branding Assistant",
          company: "Limion",
          email: "julian@limion.com",
        },
        to: {
          name: "Mable Steuber",
          job: "National Group Executive",
          company: "Opilion",
          email: "mable@opilion.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "pending",
        dueDate: "Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)",
      },
      jJAGOpOSl8: {
        id: "jJAGOpOSl8",
        from: {
          name: "Lorenz Lehner",
          job: "Forward Branding Facilitator",
          company: "Bergnaum-Kilback",
          email: "lorenz@bernaum.com",
        },
        to: {
          name: "Krystel Jones",
          job: "Forward Branding Analyst",
          company: "Losi",
          email: "krystel@losi.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "outstanding",
        dueDate: "Fri Aug 02 2019 00:31:05 GMT-0300 (Brasilia Standard Time)",
      },
      wXFpsUHm23: {
        id: "wXFpsUHm23",
        from: {
          name: "Jessie Kulas",
          job: "Senior Branding Facilitator",
          company: "Kulas",
          email: "jessie@kulas.com",
        },
        to: {
          name: "Abraham Limos",
          job: "Forward Branding Facilitator",
          company: "Lifonas",
          email: "abraham@lifonas.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "late",
        dueDate: "Fri Aug 02 2019 00:31:05 GMT-0300 (Brasilia Standard Time)",
      },
      "7zPVd4stg9": {
        id: "7zPVd4stg9",
        from: {
          name: "Abraham Milliken",
          job: "Graphic Designer",
          company: "Kronian",
          email: "abraham@kronian.com",
        },
        to: {
          name: "Lorenz Lehner",
          job: "Frontend Developer",
          company: "Opilion",
          email: "lorenz@opilion.com",
        },
        totalAmount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt facere adipisci repudiandae qui autem",

        status: "pending",
        dueDate: "Fri Aug 02 2019 00:31:05 GMT-0300 (Brasilia Standard Time)",
      },
    },
  } as EntityState<Invoice>),
  reducers: {
    add(state, action: PayloadAction<InvoiceInput>) {
      invoicesAdapter.addOne(state, {
        ...action.payload,
        id: generateID(),
      });
    },
    addMany(state, action: PayloadAction<InvoiceInput[]>) {
      invoicesAdapter.addMany(
        state,
        action.payload.map<Invoice>((i) => ({
          ...i,
          id: generateID(),
          totalAmount: 0,
        }))
      );
    },
    set: invoicesAdapter.setOne,
    setMany: invoicesAdapter.setMany,
    upsert: invoicesAdapter.upsertOne,
    upsertMany: invoicesAdapter.upsertMany,
    remove: invoicesAdapter.removeOne,
    removeMany: invoicesAdapter.removeMany,
    update: invoicesAdapter.updateOne,
    updateMany: invoicesAdapter.updateMany,
  },
});

const adapterSelectors = invoicesAdapter.getSelectors(
  (state: RootState) => state.invoices
);

export default {
  reducer: invoicesSlice.reducer,
  actions: invoicesSlice.actions,
  adapter: invoicesAdapter,
  slice: invoicesSlice,
  selectors: {
    ...adapterSelectors,
    selectInvoicesByStatus: (
      status: InvoiceStatus
    ): OutputSelector<RootState, Invoice[], (res: Invoice[]) => Invoice[]> =>
      createDraftSafeSelector(adapterSelectors.selectAll, (invoices) =>
        invoices.filter((invoice) => invoice.status === status)
      ),
  },
};
