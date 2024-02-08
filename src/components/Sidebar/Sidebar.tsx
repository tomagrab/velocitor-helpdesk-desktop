import { Home } from "lucide-react";
import { Link } from "react-router-dom";

type SidebarProps = {
  sidebarOpen: boolean;
};

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`overflow-x-hidden bg-gray-800  text-white transition-all duration-300 ease-in-out ${sidebarOpen ? `w-24` : `w-0`}`}
    >
      <div className={`bg-velblue h-16`}></div>
      <div className={`flex flex-col items-center gap-2 py-4`}>
        <Link to={`/`}>
          <Home className={`h-6 w-6`} />
        </Link>
      </div>
    </aside>
  );
}
