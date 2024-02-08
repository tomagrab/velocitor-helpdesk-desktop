import { Link, useLocation } from "react-router-dom";

type SidebarItemProps = {
  icon: React.ReactNode;
  to: string;
  text: string;
};

export default function SidebarItem({ icon, to, text }: SidebarItemProps) {
  const location = useLocation();
  return (
    <div className="group">
      <Link
        to={to}
        className={`${location.pathname === to || (location.pathname.includes(to) && to.length != 1) ? `text-velblue` : `text-white`} relative block h-full min-h-[4rem]`}
      >
        <span
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center transition-opacity duration-300 group-hover:opacity-0`}
        >
          {icon}
        </span>
        <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {text}
        </span>
      </Link>
    </div>
  );
}
