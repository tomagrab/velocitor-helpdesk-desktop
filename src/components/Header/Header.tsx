import { ChevronsRight } from "lucide-react";

type HeaderProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

export default function Header({ sidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header
      className={`flex h-16 w-full items-center justify-between bg-white px-4 shadow-lg`}
    >
      <div className={`flex w-1/2 justify-start`}>
        <ChevronsRight
          onClick={toggleSidebar}
          className={`h-6 w-6 cursor-pointer transition-transform duration-300 ease-in-out ${sidebarOpen ? "-rotate-180" : ""}`}
        />
      </div>
      <div className={`shrink-0`}>
        <h1 className={`select-none`}>My Header</h1>
      </div>
      <div className={`flex w-1/2 justify-end`}></div>
    </header>
  );
}
