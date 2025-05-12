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
    <div className="md:min-h-[100vh]  flex-col  md:flex md:flex-row gap-10  md:gap-5 mb-11">
      <div className="md:h-[100vh] w-1/2 m-auto md:w-full  md:bg-amber-50 rounded-2xl lg:w-1/5 py-5">
        <AdminSideBar />
      </div>
      <div className="min-h-[100vh] w-1/2 m-auto md:w-full bg-amber-50 rounded-2xl  p-8">
        {children}
      </div>
    </div>
  );
};

export default AdminDahboardLayout;
