import { useContext } from "react";
import { Transition } from "@headlessui/react";
import { TableHeader, TableRow, TableCell } from "@windmill/react-ui";
import { EditMode } from "@linvoice/context";

export default function InvoiceTableHeader(): React.ReactElement {
  const { editMode } = useContext(EditMode.Context);

  return (
    <TableHeader>
      <TableRow>
        <TableCell>{/* This cell using for dropdown arrow icon */}</TableCell>
        <TableCell>ID</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Due Date</TableCell>
        <TableCell>To</TableCell>
        <TableCell>From</TableCell>
        <TableCell>Total Amount ($)</TableCell>
        <Transition
          show={editMode}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <TableCell>Actions</TableCell>
        </Transition>
      </TableRow>
    </TableHeader>
  );
}
