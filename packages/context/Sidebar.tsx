import { useState, useMemo, createContext } from "react";

export interface ISidebarContext {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<ISidebarContext>({
  isSidebarOpen: false,
  closeSidebar: () => void {},
  toggleSidebar: () => void {},
});

export interface SidebarProviderProps {
  children: React.ReactNode;
}

export function SidebarProvider({
  children,
}: SidebarProviderProps): React.ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
