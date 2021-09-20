import { useContext, useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

import {
  Header,
  Sidebar,
  BreadCrumb,
  Modal as GlobalModal,
} from "@linvoice/components";
import { SidebarContext, EditMode, Modal, EditInput } from "@linvoice/context";

export default function Layout(): React.ReactElement {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/dashboard") {
    navigate("/dashboard/invoices");
  }

  useEffect(() => {
    closeSidebar();
  }, [location.pathname, closeSidebar]);

  return (
    <Modal.Provider>
      <EditInput.Provider>
        <EditMode.Provider>
          <GlobalModal />

          <div
            className={`flex relative h-screen bg-gray-50 dark:bg-gray-900 ${
              isSidebarOpen && "overflow-hidden"
            }`}
          >
            <Sidebar />

            <div className="flex flex-col flex-1 w-full">
              <Header />
              <main className="h-full overflow-y-auto">
                <div className="container grid p-6 mx-auto">
                  <BreadCrumb />
                  <Outlet />
                </div>
              </main>
            </div>
          </div>
        </EditMode.Provider>
      </EditInput.Provider>
    </Modal.Provider>
  );
}
