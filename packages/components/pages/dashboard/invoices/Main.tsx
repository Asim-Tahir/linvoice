import { useLayoutEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";

import {
  TableBody,
  TableContainer,
  Table,
  TableFooter,
  TableCell,
  Pagination,
  CollapsableTableRow,
} from "@windmill/react-ui";
import {
  ChartCard,
  DashboardCards,
  PureInvoiceTableRowCells,
  InvoiceActionBar,
  InvoiceTableHeader,
  SubServiceTableRow,
} from "@linvoice/components";
import { PageTitle, Button } from "@linvoice/components/styled";

import { useAppSelector } from "@linvoice/hooks";
import { Modal, EditInput } from "@linvoice/context";

import { invoicesStore } from "@linvoice/store";
import type { Invoice } from "@linvoice/store/types";
import { invoiceStatusUtil } from "@linvoice/store/types";

export default function Dashboard(): React.ReactElement {
  const pageSize = 10;

  const _invoices = useAppSelector((state) =>
    invoicesStore.selectors.selectAll(state)
  );

  const { openModal, setModalTitle, setModalMode, setModalScope } = useContext(
    Modal.Context
  );
  const { setServiceInput } = useContext(EditInput.Context);

  const [page, setPage] = useState(1);
  const [invoices, setInvoices] = useState<Array<Invoice>>(_invoices);

  const params = useParams();

  //store selectors
  const outstandingInvoices = useAppSelector(
    invoicesStore.selectors.selectInvoicesByStatus("outstanding")
  );
  const lateInvoices = useAppSelector(
    invoicesStore.selectors.selectInvoicesByStatus("late")
  );
  const pendingInvoices = useAppSelector(
    invoicesStore.selectors.selectInvoicesByStatus("pending")
  );
  const paidInvoices = useAppSelector(
    invoicesStore.selectors.selectInvoicesByStatus("paid")
  );

  function onPageChange(p: number) {
    setPage(p);
  }

  function handleClickAddService(invoiceID: string) {
    setModalTitle("Add Service");
    setServiceInput({
      id: "",
      invoiceID,
      description: "",
      price: 0,
      product: "",
    });

    setModalMode("add");
    setModalScope("service");

    openModal();
  }

  useLayoutEffect(() => {
    if (params.status && invoiceStatusUtil.guard(params.status)) {
      setInvoices(
        _invoices.filter((invoice) => invoice.status === params.status)
      );
    }
  }, [params.status, _invoices]);

  useLayoutEffect(() => {
    setInvoices(_invoices.slice((page - 1) * pageSize, page * pageSize));
  }, [page, _invoices]);

  return (
    <>
      <DashboardCards />

      <InvoiceActionBar />

      <TableContainer>
        <Table>
          <InvoiceTableHeader />
          <TableBody>
            {invoices.map((invoice) => (
              <CollapsableTableRow
                row={<PureInvoiceTableRowCells invoice={invoice} />}
                key={invoice.id}
              >
                <TableCell className="space-y-4" colSpan={9}>
                  <SubServiceTableRow invoiceID={invoice.id} />
                  <Button.Dashed
                    onClick={() => handleClickAddService(invoice.id)}
                  >
                    Add Service
                  </Button.Dashed>
                </TableCell>
              </CollapsableTableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={_invoices.length}
            resultsPerPage={pageSize}
            label="Table Navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 mt-4 md:grid-cols-2">
        <ChartCard title="Distribution of Invoice Types">
          <Doughnut
            data={{
              datasets: [
                {
                  data: [
                    pendingInvoices.length,
                    paidInvoices.length,
                    outstandingInvoices.length,
                    lateInvoices.length,
                  ],
                  /**
                   * These colors come from Tailwind CSS palette
                   * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                   */
                  backgroundColor: ["#24262D", "#046C4E", "#D03801", "#C81E1E"],
                  label: "Doughnut plot by status",
                },
              ],
              labels: ["pending", "paid", "outstanding", "late"],
            }}
            options={{
              responsive: true,
              color: "white",
            }}
          />
        </ChartCard>
      </div>
    </>
  );
}
