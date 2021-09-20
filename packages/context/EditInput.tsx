import { createContext, useState, Dispatch, SetStateAction } from "react";

import type { Invoice, Service } from "@linvoice/store/types";

export interface EditInputContext {
  invoiceInput: Invoice | undefined;
  setInvoiceInput: Dispatch<SetStateAction<Invoice | undefined>>;

  serviceInput: Service | undefined;
  setServiceInput: Dispatch<SetStateAction<Service | undefined>>;
}

export interface EditProviderProps {
  children: React.ReactNode;
}

const EditInputContext = createContext<EditInputContext>({
  invoiceInput: undefined,
  setInvoiceInput: () => void {},

  serviceInput: undefined,
  setServiceInput: () => void {},
});

function EditInputProvider({
  children,
}: EditProviderProps): React.ReactElement {
  const [invoiceInput, setInvoiceInput] = useState<Invoice>();
  const [serviceInput, setServiceInput] = useState<Service>();

  return (
    <EditInputContext.Provider
      value={{
        invoiceInput,
        setInvoiceInput,

        serviceInput,
        setServiceInput,
      }}
    >
      {children}
    </EditInputContext.Provider>
  );
}

export default {
  Context: EditInputContext,
  Provider: EditInputProvider,
};
