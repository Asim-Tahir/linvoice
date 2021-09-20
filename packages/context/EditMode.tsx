import { createContext, useState } from "react";

export interface EditModeContext {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

export interface EditModeProviderProps {
  children: React.ReactNode;
}

const EditModeContext = createContext<EditModeContext>({
  editMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setEditMode: () => {},
});

function EditModeProvider({
  children,
}: EditModeProviderProps): React.ReactElement {
  const [editMode, setEditMode] = useState(false);

  return (
    <EditModeContext.Provider value={{ editMode, setEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}

export default {
  Context: EditModeContext,
  Provider: EditModeProvider,
};
