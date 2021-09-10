import { Suspense } from "react";
import ReactDOM from "react-dom";
import { Windmill } from "@windmill/react-ui";

import App from "@/App";
import { GlobalStyles, StyledSuspense } from "@/styled";
import { SidebarProvider } from "@/context";

import "virtual:svg-icons-register";

import "@/assets/style/tailwind.pcss";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  <SidebarProvider>
    <Suspense fallback={<StyledSuspense>Loading...</StyledSuspense>}>
      <Windmill dark usePreferences>
        <GlobalStyles />
        <App />
      </Windmill>
    </Suspense>
  </SidebarProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
