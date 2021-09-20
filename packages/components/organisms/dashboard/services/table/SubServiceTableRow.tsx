import { useContext } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
} from "@windmill/react-ui";
import { PageTitle } from "@linvoice/components/styled";
import { ServiceRowAction } from "@linvoice/components";

import { servicesStore } from "@linvoice/store";
import { useAppSelector } from "@linvoice/hooks";
import { EditMode } from "@linvoice/context";

export interface SubServiceTableRowProps {
  invoiceID: string;
}

export default function SubServiceTableRow({
  invoiceID,
}: SubServiceTableRowProps): React.ReactElement {
  const services = useAppSelector(
    servicesStore.selectors.selectByInvoiceID(invoiceID)
  );

  const { editMode } = useContext(EditMode.Context);

  return (
    <Table>
      <TableHeader>
        <tr>
          <TableCell>
            <PageTitle>Services</PageTitle>
          </TableCell>
        </tr>
        <tr>
          <TableCell>ID</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price ($)</TableCell>
          <Transition
            show={editMode}
            as={TableCell}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            Actions
          </Transition>
        </tr>
      </TableHeader>

      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell>
              <Link to={`/dashboard/services/${service.id}`}>{service.id}</Link>
            </TableCell>
            <TableCell className="w-[35%]">{service.product}</TableCell>
            <TableCell>{service.description}</TableCell>
            <TableCell className="w-[6%]">{service.price}</TableCell>
            <Transition
              show={editMode}
              as={TableCell}
              enter="transition-opacity duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ServiceRowAction serviceID={service.id} />
            </Transition>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
