import { useContext } from "react";

import Icon from "@linvoice/icon";
import { Button } from "@linvoice/components/styled";

import { Modal, EditInput } from "@linvoice/context";

import { useAppDispatch, useAppSelector } from "@linvoice/hooks";
import { servicesStore } from "@linvoice/store";

export interface ActionsProps {
  serviceID: string;
}

export default function ServiceRowActions({
  serviceID,
}: ActionsProps): React.ReactElement {
  const dispatch = useAppDispatch();
  const service = useAppSelector((state) =>
    servicesStore.selectors.selectById(state, serviceID)
  );

  const { openModal, setModalTitle, setModalMode, setModalScope } = useContext(
    Modal.Context
  );
  const { setServiceInput } = useContext(EditInput.Context);

  function onDelete() {
    dispatch(servicesStore.actions.remove(serviceID));
  }

  function onEdit() {
    setModalTitle("Edit Service");
    setServiceInput(service);

    setModalMode("edit");
    setModalScope("service");

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
