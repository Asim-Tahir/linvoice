import { NavLink } from "react-router-dom";
import tw from "twin.macro";

export const StyledNavLink = tw(NavLink)`
  w-full p-2
  rounded-lg
  text-white font-medium
  flex justify-center items-center
  bg-purple-700
`;

import { sidebar as routes } from "@linvoice/router/routes";
import Icon from "@linvoice/icon";
import SidebarSubmenu from "./SidebarSubmenu";

export default function SidebarContent(): React.ReactElement {
  return (
    <div className="w-full h-full relative flex flex-col justify-between">
      <section className="flex flex-col w-full space-y-4 text-gray-500 dark:text-gray-400">
        <NavLink to="/">
          <Icon
            className="w-full h-auto text-gray-800 dark:text-gray-200"
            name="brand-full"
          />
        </NavLink>
        <ul className="mt-6">
          {routes.map((route) =>
            route.routes ? (
              <SidebarSubmenu route={route} key={route.name} />
            ) : (
              <li className="relative px-6 py-3" key={route.name}>
                <NavLink
                  to={route.path}
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  // activeClassName="text-gray-800 dark:text-gray-100"
                >
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
      </section>
      <section className="absolute bottom-0 w-full px-4 space-y-4 text-gray-500 dark:text-gray-400">
        <StyledNavLink to="/account/login">
          Login
          {/* <span className="ml-2" aria-hidden="true">
          <Icon className="w-6 h-6" name="account-login" />
        </span> */}
        </StyledNavLink>
        <StyledNavLink to="/account/register">
          Register
          {/* <span className="ml-2" aria-hidden="true">
          <Icon className="w-6 h-6" name="people-add" />
        </span> */}
        </StyledNavLink>
      </section>
    </div>
  );
}
