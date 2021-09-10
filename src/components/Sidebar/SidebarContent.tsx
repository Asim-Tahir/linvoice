import routes from "@/routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import { Icon } from "@/components";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";

export default function SidebarContent(): React.ReactElement {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Route path="/">
        <span className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
          Windmill
        </span>
      </Route>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  name={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
    </div>
  );
}
