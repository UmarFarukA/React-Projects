import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="h-screen">
        <main className="px-4 py-8 max-w-4xl mx-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
