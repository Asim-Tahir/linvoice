import { createContext, useState } from "react";
import { StringUnion } from "@linvoice/utils";

export const modalModeUtil = StringUnion("add", "edit");
export const modalScopeUtil = StringUnion("service", "invoice");

export type ModalMode = typeof modalModeUtil.type;

export type ModalScope = typeof modalScopeUtil.type;

export interface ModalContext {
  modalOpen: boolean;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;

  modalMode: ModalMode;
  modalModeUtil: typeof modalModeUtil;
  setModalMode: (mode: ModalMode) => void;

  modalScope: ModalScope;
  modalScopeUtil: typeof modalScopeUtil;
  setModalScope: (scope: ModalScope) => void;

  modalTitle: string;
  setModalTitle: (title: string) => void;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContext>({
  modalOpen: false,
  toggleModal: () => void {},
  openModal: () => void {},
  closeModal: () => void {},

  modalMode: "add",
  modalModeUtil,
  setModalMode: () => void {},

  modalScope: "invoice",
  modalScopeUtil,
  setModalScope: () => void {},

  modalTitle: "Add Invoice",
  setModalTitle: () => void {},
});

function ModalProvider({ children }: ModalProviderProps): React.ReactElement {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Invoice");
  const [modalMode, setModalMode] = useState<ModalMode>("add");
  const [modalScope, setModalScope] = useState<ModalScope>("invoice");

  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  function closeModal() {
    setModalOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
        toggleModal,

        modalMode,
        modalModeUtil,
        setModalMode,

        modalScope,
        modalScopeUtil,
        setModalScope,

        modalTitle,
        setModalTitle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default {
  Provider: ModalProvider,
  Context: ModalContext,
};
