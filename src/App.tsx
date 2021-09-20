import { Suspense } from "react";
import RouterView from "@linvoice/router";
import { Provider } from "react-redux";
import { Windmill } from "@windmill/react-ui";

import { StyledSuspense } from "@linvoice/components/styled";
import { SidebarProvider } from "@linvoice/context";
import store from "@linvoice/store";

import "@linvoice/assets/styles/tailwind.pcss";

export default function App(): React.ReactElement {
  return (
    <SidebarProvider>
      <Suspense fallback={<StyledSuspense>Loading...</StyledSuspense>}>
        <Windmill dark usePreferences>
          <Provider store={store}>
            <RouterView />
          </Provider>
        </Windmill>
      </Suspense>
    </SidebarProvider>
  );
}
