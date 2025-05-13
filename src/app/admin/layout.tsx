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
    <div className="lg:min-h-[100vh] flex-col lg:flex md:flex-row gap-10 items-start justify-end  md:gap-5 mb-11">
      <div className="lg:h-[100vh]  md:w-full  lg:bg-amber-50 rounded-2xl lg:w-1/5 py-5">
        <AdminSideBar />
      </div>
      <div className="min-h-[100vh] m-auto md:w-full bg-amber-50 rounded-2xl p-8">
        {children}
      </div>
    </div>
  );
};

export default AdminDahboardLayout;
