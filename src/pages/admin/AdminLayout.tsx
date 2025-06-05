import {
  FaTachometerAlt,
  FaEnvelope,
  FaMailBulk,
  FaUsers,
  FaCommentDots,
  FaClipboardList,
  FaRobot,
} from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo mondus new (1).gif";

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", to: "/admin" },
    { icon: <FaEnvelope />, label: "Newsletter", to: "/admin/newsletter" },
    { icon: <FaMailBulk />, label: "Emailer", to: "/admin/emailer" },
    { icon: <FaUsers />, label: "Subscriber", to: "/admin/subscriber" },
    { icon: <FaCommentDots />, label: "Leads", to: "/admin/contacts" },
    {
      icon: <FaClipboardList />,
      label: "Call Back Leads",
      to: "/admin/request",
    },
    { icon: <FaRobot />, label: "Chat Leads", to: "/admin/chatleads" },
  ];

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden bg-black text-white font-raleway">
      {/* Mobile Top Nav */}
      <div className="lg:hidden bg-[#111] flex items-center justify-between px-4 py-3 shadow-md">
        <a href="/">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </a>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-[#111] shadow-md p-4 space-y-4 fixed h-full">
        <a href="/">
          <img src={logo} alt="logo" className="h-20 w-auto mx-auto mb-2" />
        </a>
        <nav className="flex flex-col gap-2 text-sm overflow-y-auto">
          {navItems.map(({ icon, label, to }) => (
            <NavItem
              key={to}
              icon={icon}
              label={label}
              to={to}
              active={location.pathname === to}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 overflow-y-auto p-4 sm:p-6 pb-20 lg:pb-6 h-full">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#111] border-t border-[#222] flex justify-around items-center h-14 z-50">
        {navItems.map(({ icon, label, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center flex-1 text-xs ${
                isActive
                  ? "text-[var(--primary-color)] font-semibold"
                  : "text-gray-400 hover:text-[var(--primary-color)]"
              }`}
            >
              <div className="text-lg">{icon}</div>
              <span className="mt-0.5">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

const NavItem = ({
  icon,
  label,
  to,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-3 py-2 rounded whitespace-nowrap ${
      active
        ? "bg-[var(--primary-color)] text-black font-semibold"
        : "hover:bg-[var(--primary-color)] hover:text-black"
    }`}
  >
    {icon} {label}
  </Link>
);

export default AdminLayout;
