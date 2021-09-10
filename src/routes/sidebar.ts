/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "home", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/forms",
    icon: "forms",
    name: "Forms",
  },
  {
    path: "/app/cards",
    icon: "cards",
    name: "Cards",
  },
  {
    path: "/app/charts",
    icon: "charts",
    name: "Charts",
  },
  {
    path: "/app/buttons",
    icon: "buttons",
    name: "Buttons",
  },
  {
    path: "/app/modals",
    icon: "modals",
    name: "Modals",
  },
  {
    path: "/app/tables",
    icon: "tables",
    name: "Tables",
  },
  {
    icon: "pages",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/app/404",
        name: "404",
      },
      {
        path: "/app/blank",
        name: "Blank",
      },
    ],
  },
];

export default routes;
