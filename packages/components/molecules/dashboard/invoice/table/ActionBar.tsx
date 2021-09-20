import { useContext } from "react";

import { Switch } from "@headlessui/react";
import { Card, CardBody, Label } from "@windmill/react-ui";
import { Button } from "@linvoice/components/styled";
import Icon from "@linvoice/icon";

import { EditMode, Modal, EditInput } from "@linvoice/context";

export default function ActionBar(): React.ReactElement {
  const { editMode, setEditMode } = useContext(EditMode.Context);
  const { openModal, setModalTitle, setModalMode, setModalScope } = useContext(
    Modal.Context
  );
  const { setInvoiceInput } = useContext(EditInput.Context);

  function handleClickAddInvoice() {
    setModalTitle("Add Invoice");
    setInvoiceInput(undefined);

    setModalMode("add");
    setModalScope("invoice");

    openModal();
  }

  return (
    <Card className="mb-4">
      <CardBody className="flex justify-end items-center space-x-8 relative">
        <Button.Primary className="space-x-2" onClick={handleClickAddInvoice}>
          <Icon name="outline-document-add" className="w-4 h-4" />
          <span>Add Invoice</span>
        </Button.Primary>

        <Label className="flex justify-center items-center space-x-2">
          <Icon
            name="edit"
            className={`w-6 h-6 transition-all duration-100 ${
              editMode ? "text-primary-600" : "text-gray-400 dark:text-gray-600"
            }`}
          />
          <Switch
            checked={editMode}
            title="Enable Invoice Edit Mode"
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onChange={setEditMode!}
            className={`${
              editMode ? "bg-primary-600" : "bg-gray-400 dark:text-gray-600"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Enable Invoice Edit Mode</span>
            <span
              className={`${
                editMode ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-all ease-in-out duration-200`}
            />
          </Switch>
        </Label>
      </CardBody>
    </Card>
  );
}
