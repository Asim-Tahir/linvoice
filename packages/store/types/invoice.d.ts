import { StringUnion } from "@linvoice/utils";

export interface Holder {
  name: string;
  job: string;
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
}
export interface ServiceInput {
  invoiceID: string;
  product: string;
  description: string;
  price: number;
}

export interface Service extends ServiceInput {
  id: string;
}

export const invoiceStatusUtil = StringUnion(
  "paid",
  "outstanding",
  "late",
  "pending"
);

export type InvoiceStatus = typeof invoiceStatusUtil.type;

export interface InvoiceInput {
  description: string;
  status: InvoiceStatus;
  dueDate: string;
  to: Holder;
  from: Holder;
}
export interface Invoice extends InvoiceInput {
  id: string;
}
