import { Suspense } from "react";
import ReactDOM from "react-dom";
import { Windmill } from "@windmill/react-ui";

import App from "@/App";
import { StyledSuspense } from "@linvoice/components/styled";
import { SidebarProvider } from "@linvoice/context";

import "virtual:svg-icons-register";

import "@linvoice/assets/styles/tailwind.pcss";

ReactDOM.render(
  // <React.StrictMode>
  <SidebarProvider>
    <Suspense fallback={<StyledSuspense>Loading...</StyledSuspense>}>
      <Windmill dark usePreferences>
        <App />
      </Windmill>
    </Suspense>
  </SidebarProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
