import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll mx-4">
        <main className=" h-screen w-11/12 md:w-10/12 mx-auto mt-3">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
