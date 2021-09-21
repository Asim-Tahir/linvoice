import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  TableHeader,
  Table,
  Button,
} from "@windmill/react-ui";
import { PageTitle } from "@linvoice/components/styled";
import { StatusBadge } from "@linvoice/components";
import Icon from "@linvoice/icon";

import tw from "twin.macro";

export const StyledHR = tw.hr`bg-gray-100 dark:bg-gray-900 h-0.5 rounded`;

import { servicesStore, invoicesStore } from "@linvoice/store";
import { useAppSelector } from "@linvoice/hooks";

export default function Detail(): React.ReactElement {
  const params = useParams();

  const services = useAppSelector(
    servicesStore.selectors.selectByInvoiceID(params.invoiceID!)
  );
  const invoice = useAppSelector((state) =>
    invoicesStore.selectors.selectById(state, params.invoiceID!)
  );

  const subTotal = useAppSelector(servicesStore.selectors.selectSubTotalPrice);

  const tax = useAppSelector(
    servicesStore.selectors.selectSubTotalPriceTax(0.18)
  );

  return (
    <div className="text-gray-900 dark:text-gray-100">
      <Card>
        <CardBody className="flex flex-col space-x-4 space-y-4 p-8">
          <p className="flex justify-center items-center space-x-2">
            <PageTitle>Invoice - {invoice?.id}</PageTitle>
            <StatusBadge type={invoice?.status}>{invoice?.status}</StatusBadge>
          </p>
          <p>{invoice?.description}</p>

          <StyledHR />

          <section className="flex justify-between px-4 items-center">
            <span className="space-x-2">
              <b>Due Date:</b>
              <time dateTime={invoice?.dueDate}>{invoice?.dueDate}</time>
            </span>
            <span className="space-x-2">
              <b>Invoice ID:</b>
              <span>{invoice?.id}</span>
            </span>
          </section>

          <StyledHR />

          <section className="flex justify-between">
            <p className="space-y-1">
              <h3 className="text-lg font-bold mb-2">Invoiced To:</h3>
              <p>{invoice?.to.name}</p>
              <p>{invoice?.to.company}</p>
              <p>{invoice?.to.job}</p>
              <p>{invoice?.to.address}</p>
              <p>{invoice?.to.email}</p>
            </p>
            <p className="text-right space-y-1">
              <h3 className="text-lg font-bold mb-2">Invoiced From:</h3>
              <p>{invoice?.from.name}</p>
              <p>{invoice?.from.company}</p>
              <p>{invoice?.from.job}</p>
              <p>{invoice?.from.address}</p>
              <p>{invoice?.from.email}</p>
            </p>
          </section>

          <StyledHR />

          <TableContainer>
            <Table>
              <TableHeader>
                <TableRow>
                  <PageTitle>Services</PageTitle>
                </TableRow>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price ($)</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>{service.id}</TableCell>
                    <TableCell>{service.product}</TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell>{service.price}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell colSpan={3} className="text-right">
                    <b>Sub Total:</b>
                  </TableCell>
                  <TableCell colSpan={1}>{subTotal}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={3} className="text-right">
                    <b>Tax:</b>
                  </TableCell>
                  <TableCell colSpan={1}>{tax}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={3} className="text-right">
                    <b>Total:</b>
                  </TableCell>
                  <TableCell colSpan={1}>{subTotal + tax}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center" colSpan={4}>
                    NOTE: This is computer generated receipt and does not
                    require physical signature.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <StyledHR />

          <Button
            layout="link"
            className="space-x-1"
            onClick={() => window.print()}
          >
            <Icon className="w-8 h-8" name="outline-printer" />
            <span>Print</span>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
