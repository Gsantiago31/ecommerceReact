import { Navigate, Route, Routes } from "react-router-dom";
import { CheckingAuth } from "../ui";
import { DashboardRoutes } from "../dashboard/routes";
import { StorefrontRoutes } from "../storefront/routes";
import { LoginPage } from "../auth/pages";
import { useCheckAuth } from "../hooks";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const checkingStatus = useCheckAuth();

  const { status } = useSelector((state) => state.auth);

  if (checkingStatus === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "admin" ? (
        <Route path="/*" element={<DashboardRoutes />} />
      ) : (
        <Route path="/*" element={<StorefrontRoutes />} />
      )}
    </Routes>
  );
};
