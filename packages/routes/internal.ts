import { lazy } from "react";

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 *
 * NOTE: use lazy for better code splitting, a.k.a. load faster
 */
export default [
  {
    path: "/dashboard",
    component: lazy(() => import("@linvoice/components/pages/Dashboard")), // view rendered
  },
  {
    path: "/forms",
    component: lazy(() => import("@linvoice/components/pages/Forms")),
  },
  {
    path: "/cards",
    component: lazy(() => import("@linvoice/components/pages/Cards")),
  },
  {
    path: "/charts",
    component: lazy(() => import("@linvoice/components/pages/Charts")),
  },
  {
    path: "/buttons",
    component: lazy(() => import("@linvoice/components/pages/Buttons")),
  },
  {
    path: "/modals",
    component: lazy(() => import("@linvoice/components/pages/Modals")),
  },
  {
    path: "/tables",
    component: lazy(() => import("@linvoice/components/pages/Tables")),
  },
  {
    path: "/404",
    component: lazy(() => import("@linvoice/components/pages/404")),
  },
  {
    path: "/blank",
    component: lazy(() => import("@linvoice/components/pages/Blank")),
  },
] as Array<{
  path: string;
  component: ReturnType<typeof lazy>;
}>;
