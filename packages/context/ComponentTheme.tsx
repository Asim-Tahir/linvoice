import { createContext } from "react";

interface IThemeContext {
  theme: any;
  mode?: any;
  toggleMode?: any;
}

export const ComponentThemeContext = createContext<IThemeContext>({
  theme: {},
});

interface ComponentThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}

export function ComponentThemeProvider({
  children,
  value,
}: ComponentThemeProviderProps): React.ReactElement {
  return (
    <ComponentThemeContext.Provider value={value}>
      {children}
    </ComponentThemeContext.Provider>
  );
}
