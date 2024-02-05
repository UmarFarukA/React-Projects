import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div>
      <h3>Available Careers</h3>
      <Outlet />
    </div>
  );
}
