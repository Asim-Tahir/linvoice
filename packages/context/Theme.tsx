import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useMemo,
  createContext,
} from "react";
import defaultTheme from "./defaultTheme";

/**
 * Saves the old theme for future use
 * @param theme - Name of curent theme
 * @return previousTheme
 */
function usePrevious(theme: string): string | undefined {
  const ref = useRef<string>();
  useEffect(() => {
    ref.current = theme;
  });
  return ref.current;
}

/**
 * Gets user preferences from local storage
 * @param key - localStorage key
 * @return getter and setter for user preferred theme
 */
function useStorageTheme(
  key: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const userPreference =
    !!window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(
    // use stored theme; fallback to user preference
    localStorage.getItem(key) || userPreference
  );

  // update stored theme
  useEffect(() => {
    localStorage.setItem(key, theme.toString());
  }, [theme, key]);

  return [theme, setTheme];
}

interface ThemeContextInterface {
  theme: typeof defaultTheme;
  mode?: string | null;
  toggleMode?: any;
}

// create context
export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
});

export interface ThemeProviderProps {
  children: React.ReactElement | string;
}

// create context provider
export function ThemeProvider({
  children,
}: ThemeProviderProps): React.ReactElement {
  const [theme, setTheme] = useStorageTheme("theme");

  // update root element class on theme change
  const oldTheme = usePrevious(theme);
  useLayoutEffect(() => {
    document.documentElement.classList.remove(`theme-${oldTheme}`);
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme, oldTheme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
