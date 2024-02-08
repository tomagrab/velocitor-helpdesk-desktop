import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && sidebarOpen) {
        setSidebarOpen(false);
      }

      if (window.innerWidth >= 768 && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className={`flex min-h-screen`}>
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`flex min-h-screen min-w-0 flex-1 flex-col`}>
        <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex flex-1 bg-slate-200 p-4`}>
          <div
            className={`max-h-[calc(100vh-8rem)] flex-1 overflow-auto rounded bg-white p-4`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
