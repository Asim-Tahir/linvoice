import { useContext } from "react";
import { Transition } from "@headlessui/react";
import { Backdrop } from "@windmill/react-ui";

import { SidebarContext } from "@linvoice/context";
import SidebarContent from "./SidebarContent";

export default function MobileSidebar(): React.ReactElement {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  return (
    <Transition show={isSidebarOpen}>
      <>
        <Transition.Child
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={closeSidebar} />
        </Transition.Child>

        <Transition.Child
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0 transform -translate-x-20"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 transform -translate-x-20"
        >
          <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden">
            <SidebarContent />
          </aside>
        </Transition.Child>
      </>
    </Transition>
  );
}
