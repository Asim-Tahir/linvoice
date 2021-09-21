import { invoicesStore } from "@linvoice/store";
import rootState from "../rootState";

describe("Invoice Store Reducers", () => {
  test("should handle add()", () => {
    const actual = invoicesStore.reducer(
      rootState.invoices,
      invoicesStore.actions.add(rootState.invoiceForm)
    );
    expect(actual.ids).toHaveLength(3);
  });

  test("should handle addMany()", () => {
    const actual = invoicesStore.reducer(
      rootState.invoices,
      invoicesStore.actions.addMany([
        rootState.invoiceForm,
        rootState.invoiceForm,
      ])
    );
    expect(actual.ids).toHaveLength(4);
  });
});
