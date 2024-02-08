import { Home } from "lucide-react";
import SidebarItem from "./SidebarItem/SidebarItem";

type SidebarProps = {
  sidebarOpen: boolean;
};

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`overflow-x-hidden bg-gray-800  text-white transition-all duration-300 ease-in-out ${sidebarOpen ? `w-24` : `w-0`}`}
    >
      <div className={`h-16 bg-velblue`}></div>
      <div className={`flex flex-col items-center gap-2 py-4`}>
        <SidebarItem icon={<Home />} to="/" text="Home" />
      </div>
    </aside>
  );
}
