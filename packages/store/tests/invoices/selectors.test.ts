import { invoicesStore } from "@linvoice/store";

import rootState from "../rootState";

describe("Invoices Store Selectors", () => {
  describe("selectInvoicesByStatus()", () => {
    test("should select late invoices", () => {
      const invoices =
        invoicesStore.selectors.selectInvoicesByStatus("late")(rootState);

      expect(invoices.filter((i) => i.status === "late")).toBeTruthy();
    });

    test("should select outstanding invoices", () => {
      const invoices =
        invoicesStore.selectors.selectInvoicesByStatus("outstanding")(
          rootState
        );

      expect(invoices.filter((i) => i.status === "outstanding")).toBeTruthy();
    });

    test("should select paid invoices", () => {
      const invoices =
        invoicesStore.selectors.selectInvoicesByStatus("paid")(rootState);

      expect(invoices.filter((i) => i.status === "paid")).toBeTruthy();
    });

    test("should select pending invoices", () => {
      const invoices =
        invoicesStore.selectors.selectInvoicesByStatus("pending")(rootState);

      expect(invoices.filter((i) => i.status === "pending")).toBeTruthy();
    });
  });
});
