import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto h-screen max-w-4xl px-4 py-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
