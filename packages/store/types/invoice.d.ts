export interface Holder {
  id: string;
  email: string;
  phone: string;
  fax: string;
  address: string;
}

export interface Individual extends Holder {
  id: string;
  name: string;
  surname: string;
}

export interface Company extends Holder {
  id: string;
  name: string;
}

export interface Expense {
  id: string;
  name: string;
  price: number;
}

export interface Service {
  id: string;
  invoiceId: string;
  product: string;
  description: string;
  price: number;
  hourlyPrice: number;
  expenses: Array<Expense>;
}

export type InvoiceStatus = "paid" | "outstanding" | "late";

export interface Invoice<S extends Service = Service> {
  id: string;
  services: Array<S>;
  description: string;
  status: InvoiceStatus;
  dueDate: Date;
  to: Individual | Company;
  from: Individual | Company;
}
