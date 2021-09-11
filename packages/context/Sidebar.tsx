import { useState, useMemo, createContext } from "react";

// create context
export const SidebarContext = createContext<{
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}>({
  isSidebarOpen: false,
  closeSidebar: Function as () => void,
  toggleSidebar: Function as () => void,
});

export interface SidebarProviderProps {
  children: React.ReactElement | string;
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
