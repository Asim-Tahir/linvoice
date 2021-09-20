import { servicesStore } from "@linvoice/store";

import rootState from "../rootState";

describe("Services Store Selectors", () => {
  describe("selectTotalAmountByInvoiceID()", () => {
    test("should select the total amount of the invoice", () => {
      const totalAmount =
        servicesStore.selectors.selectTotalAmountByInvoiceID("iyI0NuErkN")(
          rootState
        );

      expect(totalAmount).toEqual(425.25);
    });
  });

  describe("selectByInvoiceID()", () => {
    test("should select services by invoice id", () => {
      const services =
        servicesStore.selectors.selectByInvoiceID("iyI0NuErkN")(rootState);

      expect(services).toHaveLength(1);
    });
  });

  describe("selectSubTotalPrice()", () => {
    test("should select sub total price", () => {
      const subTotalPrice =
        servicesStore.selectors.selectSubTotalPrice(rootState);

      expect(subTotalPrice).toBeCloseTo(684.09);
    });
  });

  describe("selectSubTotalPriceWithTax()", () => {
    test("should select sub total price tax %18", () => {
      const subTotalPriceWithTax =
        servicesStore.selectors.selectSubTotalPriceTax(0.18)(rootState);

      expect(subTotalPriceWithTax).toBeCloseTo(684.09 * 0.18);
    });
    test("should select sub total price tax %8", () => {
      const subTotalPriceWithTax =
        servicesStore.selectors.selectSubTotalPriceTax(0.08)(rootState);

      expect(subTotalPriceWithTax).toBeCloseTo(684.09 * 0.08);
    });
  });
});
