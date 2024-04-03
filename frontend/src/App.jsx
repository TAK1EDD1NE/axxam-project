import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ROLES from "./utils/roles";
import PrivateRoute from "./components/common/PrivateRoute";
import PaymentIntegration from "./components/reservation/PaymentIntegration";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LesseeLayout = lazy(() => import("./components/common/LesseeLayout"));
const LessorLayout = lazy(() => import("./components/common/LessorLayout"));
const Layout = lazy(() => import("./components/common/Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PropertyPage = lazy(() => import("./pages/PropertyPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const OurServicesPage = lazy(() => import("./pages/OurServicesPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const SuccessPayment = lazy(() => import("./components/reservation/SuccessPayment"));
const CanceledPayment = lazy(() => import("./components/reservation/CanceledPayment"));
const FavoritePropertiesPage = lazy(() => import("./pages/FavoritePropertiesPage"));
const BookingHistoryPage = lazy(() => import("./pages/BookingHistoryPage"));
const MainInfos = lazy(() => import("./pages/MainInfospage"));

const App = () => {
  return (
    <>
      {/* <Backdrop /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<LandingPage/>} />
          <Route path="/services" element={<OurServicesPage/>} />
          <Route path="/property" element={<PropertyPage/>} />
          <Route path="/success" element={<SuccessPayment />} />
          <Route path="/canceled" element={<CanceledPayment />} />
          <Route path="/checkout" element={<PaymentIntegration><CheckoutPage /></PaymentIntegration>} />

          {/* lessee routes */}
          <Route
            path="lessee"
            element={
              <PrivateRoute element={<LesseeLayout />} allowed={ROLES.lessee} />
            }
          >
            <Route index element={<HomePage />} />
            
          </Route>

          {/* lessor routes */}
          <Route
            path="lessor"
            element={
              <PrivateRoute element={<LessorLayout />} allowed={ROLES.lessor} />
            }
          >
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
