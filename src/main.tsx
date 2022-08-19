import { createRoot } from "react-dom/client";

import "virtual:svg-icons-register";

import App from "@/App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(<App />);
