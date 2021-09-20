import {
  createSlice,
  createEntityAdapter,
  createDraftSafeSelector,
  EntityState,
  OutputSelector,
  PayloadAction,
} from "@reduxjs/toolkit";

import { generateID } from "@linvoice/utils";

import type { Service, ServiceInput } from "@linvoice/store/types";

interface RootState {
  services: EntityState<Service>;
}

const servicesAdapter = createEntityAdapter<Service>({
  selectId: (service) => service.id,
  sortComparer: (s1, s2) => s1.product.localeCompare(s2.product),
});

const servicesSlice = createSlice({
  name: "services",
  initialState: servicesAdapter.getInitialState({
    ids: ["GMa7iYXzhx", "Le9NjVfCPi", "1NupMoPucu", "kwm3LwiVtP", "eTxVyXNYTX"],
    entities: {
      GMa7iYXzhx: {
        id: "GMa7iYXzhx",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 524.5,
        invoiceID: "WQY4Gx8NpW",
        product: "Loremi SEO Service",
      },
      Le9NjVfCPi: {
        id: "Le9NjVfCPi",
        description: "Loremi imspum sidasd adkgsadaf asdfgas",
        price: 254,
        invoiceID: "WQY4Gx8NpW",
        product: "Website Speed Optimization",
      },
      "1NupMoPucu": {
        id: "1NupMoPucu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 55.2,
        invoiceID: "SUTuvRtmH4",
        product: "Website Speed Optimization",
      },
      kwm3LwiVtP: {
        id: "kwm3LwiVtP",
        invoiceID: "KyEqa9FcKo",
        description: "Lorem Ipsum Dolor Sit Amet",
        price: 524.5,
        product: "Lorem ipsum dolor sit amet",
      },
      eTxVyXNYTX: {
        id: "eTxVyXNYTX",
        invoiceID: "mkrKj80Wbj",
        description: "Lorem Ipsum Dolor Sit Amet",
        price: 125.5,
        product: "Lorem ipsum dolor sit amet",
      },
    },
  } as EntityState<Service>),
  reducers: {
    add(state, action: PayloadAction<ServiceInput>) {
      servicesAdapter.addOne(state, {
        ...action.payload,
        id: generateID(),
      });
    },
    addMany(state, action: PayloadAction<ServiceInput[]>) {
      servicesAdapter.addMany(
        state,
        action.payload.map<Service>((s) => ({
          ...s,
          id: generateID(),
        }))
      );
    },
    remove: servicesAdapter.removeOne,
    removeMany: servicesAdapter.removeMany,
    update: servicesAdapter.updateOne,
    updateMany: servicesAdapter.updateMany,
    upsert: servicesAdapter.upsertOne,
    upsertMany: servicesAdapter.upsertMany,
    setOne: servicesAdapter.setOne,
    setMany: servicesAdapter.setMany,
  },
});

const adapterSelectors = servicesAdapter.getSelectors(
  (state: RootState) => state.services
);

export default {
  slice: servicesSlice,
  actions: servicesSlice.actions,
  reducer: servicesSlice.reducer,
  adapter: adapterSelectors,
  selectors: {
    ...adapterSelectors,
    selectTotalAmountByInvoiceID: (
      invoiceID: string
    ): OutputSelector<RootState, number, (res: Service[]) => number> =>
      createDraftSafeSelector(adapterSelectors.selectAll, (services) =>
        services
          .filter((service) => service.invoiceID == invoiceID)
          .reduce((prev, curr) => prev + curr.price, 0)
      ),
    selectByInvoiceID: (invoiceID: string) =>
      createDraftSafeSelector(adapterSelectors.selectAll, (services) => {
        return services.filter((service) => service.invoiceID === invoiceID);
      }),
    selectSubTotalPrice: createDraftSafeSelector(
      adapterSelectors.selectAll,
      (services) => services.reduce((sum, service) => sum + service.price, 0)
    ),
    selectSubTotalPriceTax: (tax: number) =>
      createDraftSafeSelector(adapterSelectors.selectAll, (services) =>
        services.reduce((sum, service) => sum + service.price * tax, 0)
      ),
  },
};
