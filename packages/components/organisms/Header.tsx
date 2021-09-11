import { useContext, useState } from "react";
import {
  Avatar,
  Badge,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import Icon from "@linvoice/icon";
import { SidebarContext } from "@linvoice/context";

export default function Header(): React.ReactElement {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Icon name="menu" className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <Icon name="search" className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              css=""
              className="pl-8 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <Icon name="sun" className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Icon name="moon" className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <Icon name="bell" className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Alerts</span>
              </DropdownItem>
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                <Icon
                  name="outlinePerson"
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <Icon
                  name="outlineCog"
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Log out!")}>
                <Icon
                  name="outlineLogout"
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}
