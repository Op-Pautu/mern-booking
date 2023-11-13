import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <Header />
      <Outlet />
    </div>
  );
}
