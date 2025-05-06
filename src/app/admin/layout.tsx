import AdminSideBar from "./AdminSideBar";
import type { Metadata } from "next";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "this is admin dashboard",
};

const AdminDahboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div className="min-h-[100vh] flex gap-5 mb-11">
      <div className="h-[100vh] bg-amber-50 rounded-2xl lg:w-1/5 py-5">
        <AdminSideBar />
      </div>
      <div className="min-h-[100vh] bg-amber-50 rounded-2xl w-full lg:w-4/5 p-8">
        {children}
      </div>
    </div>
  );
};

export default AdminDahboardLayout;
