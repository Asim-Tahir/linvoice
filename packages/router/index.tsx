import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  Page404,
  InvoicesMain,
  InvoicesDetail,
  AccountLogin,
  AccountForgotPassword,
  AccountRegister,
  DashboardLayout,
} from "@linvoice/components/pages";
import { A11yNavigationAnnouncer } from "@linvoice/components";

export default function RouterView(): React.ReactElement {
  return (
    <BrowserRouter>
      <A11yNavigationAnnouncer />
      <Routes>
        <Route index element={<Navigate to="/dashboard/invoices" />} />

        <Route path="account">
          <Route path="login" element={<AccountLogin />} />
          <Route path="register" element={<AccountRegister />} />
          <Route path="forgot-password" element={<AccountForgotPassword />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="invoices/:invoiceID" element={<InvoicesDetail />} />
          <Route path="invoices" element={<InvoicesMain />}>
            <Route path="status" element={<Navigate replace={true} to="/" />}>
              <Route path=":status" element={<InvoicesMain />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
