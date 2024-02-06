import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows[auto_1fr_auto] relative">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll mx-4">
        <main className=" h-screen">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
