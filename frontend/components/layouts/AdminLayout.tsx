import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-800 flex">
      <AdminSidebar />
      <main className="flex-1 ml-64">
        <Outlet />
      </main>
    </div>
  );
}
