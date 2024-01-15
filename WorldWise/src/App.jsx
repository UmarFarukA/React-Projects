import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AppPageLayout from "./components/AppPageLayout";
import CitiesList from "./pages/City/CitiesList";
import CountriesList from "./pages/Country/CountriesList";
import City from "./pages/City/City";
import Form from "./components/Form";
import { CityProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectRoute from "./pages/ProtectRoute";

export default function App() {
  return (
    <AuthProvider>
      <CityProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="app"
              element={
                <ProtectRoute>
                  <AppPageLayout />
                </ProtectRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CitiesList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </CityProvider>
    </AuthProvider>
  );
}
