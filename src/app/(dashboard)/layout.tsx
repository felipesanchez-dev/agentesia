import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "../modules/dashboard/ui/components/dashboard-sidebar";
import { DashboardNavbar } from "../modules/dashboard/ui/components/dashboard-navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen">
        <DashboardNavbar />
        <div className="pt-16 flex-1">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;