import { useContext } from "react";

import Icon from "@linvoice/icon";
import { Button } from "@linvoice/components/styled";

import { Modal, EditInput } from "@linvoice/context";

import { useAppDispatch, useAppSelector } from "@linvoice/hooks";
import { invoicesStore } from "@linvoice/store";

export interface ActionsProps {
  invoiceID: string;
}

export default function RowActions({
  invoiceID,
}: ActionsProps): React.ReactElement {
  const dispatch = useAppDispatch();

  const invoice = useAppSelector((state) =>
    invoicesStore.selectors.selectById(state, invoiceID)
  );

  const { openModal, setModalTitle, setModalMode, setModalScope } = useContext(
    Modal.Context
  );
  const { setInvoiceInput } = useContext(EditInput.Context);

  function onDelete() {
    dispatch(invoicesStore.actions.remove(invoiceID));
  }

  function onEdit() {
    setModalTitle("Edit Invoice");
    setInvoiceInput(invoice);

    setModalMode("edit");
    setModalScope("invoice");

    openModal();
  }

  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <Button.Danger onClick={onDelete}>
        <Icon name="trash" className="w-4 h-4" />
      </Button.Danger>
      <Button.Primary onClick={onEdit}>
        <Icon name="edit" className="w-4 h-4" />
      </Button.Primary>
    </div>
  );
}
