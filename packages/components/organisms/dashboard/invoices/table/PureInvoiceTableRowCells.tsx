import { useContext } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { TableCell } from "@windmill/react-ui";
import { InvoiceRowAction, StatusBadge } from "@linvoice/components";

import type { Invoice } from "@linvoice/store/types";
import { servicesStore } from "@linvoice/store";
import { useAppSelector } from "@linvoice/hooks";
import { EditMode } from "@linvoice/context";

export interface PureInvoiceTableRowCellsProps {
  invoice: Invoice;
}

export default function PureInvoiceTableRowCells({
  invoice,
}: PureInvoiceTableRowCellsProps): React.ReactElement {
  const { editMode } = useContext(EditMode.Context);
  const totalAmount = useAppSelector(
    servicesStore.selectors.selectTotalAmountByInvoiceID(invoice.id)
  );

  return (
    <>
      <TableCell>
        <Link to={invoice.id}>{invoice.id}</Link>
      </TableCell>
      <TableCell width="35%">
        <span>{invoice.description}</span>
      </TableCell>
      <TableCell>
        <Link to={`status/${invoice.status}`}>
          <StatusBadge type={invoice.status}>{invoice.status}</StatusBadge>
        </Link>
      </TableCell>
      <TableCell>
        <time className="text-sm">
          {new Date(invoice.dueDate).toUTCString()}
        </time>
      </TableCell>
      <TableCell>
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{invoice.to.name}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {invoice.to.job}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {invoice.to.company}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{invoice.from.name}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {invoice.from.job}
            </p>
            {invoice.from.company && (
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {invoice.from.company}
              </p>
            )}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <span className="text-sm">{totalAmount}</span>
      </TableCell>
      <Transition
        show={editMode}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <TableCell className="transition-all duration-100 ease-in-out">
          <InvoiceRowAction invoiceID={invoice.id} />
        </TableCell>
      </Transition>
    </>
  );
}
