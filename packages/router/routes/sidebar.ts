interface SidebarRoute {
  path: string;
  icon: string;
  name: string;
  routes: Array<SidebarRoute>;
}

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
export default [
  {
    path: "/", // the url
    icon: "home", // the component being exported from icons/index.js
    name: "Home", // name that appear in Sidebar
  },
  {
    icon: "cards",
    path: "/dashboard",
    name: "Dashboards",
    routes: [
      {
        path: "/dashboard/invoices",
        name: "Invoice Dashboard",
      },
    ],
  },
] as Array<SidebarRoute>;
