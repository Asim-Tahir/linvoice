import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Modal } from "@linvoice/context";

import { InvoiceForm, ServiceForm } from "@linvoice/components";
import { StyledModal } from "@linvoice/components/styled";

export default function PopUpModal(): React.ReactElement {
  const { modalOpen, modalTitle, closeModal, modalScope } = useContext(
    Modal.Context
  );

  return (
    <Transition appear show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="z-10 h-full overflow-y-auto"
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onClose={closeModal}
      >
        <div className="px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <StyledModal>
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
              >
                {modalTitle}
              </Dialog.Title>

              {modalScope === "invoice" && <InvoiceForm />}
              {modalScope === "service" && <ServiceForm />}
            </StyledModal>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
