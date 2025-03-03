import React from "react";
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
  MdOutlineSchedule,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setOpenSidebar } from "../redux/slices/authSlice";
import clsx from "clsx";

const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tareas",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completadas",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "En curso",
    link: "in-progress/in progress",
    icon: <MdOutlineSchedule />,
  },
  {
    label: "Por hacer",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Equipo",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Papelera",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
          path === el.link.split("/")[0]
            ? "bg-blue-500 text-neutral-50 hover:text-gray-800"
            : ""
        )}
      >
        <div className="flex items-center space-x-2">
          <span>{el.icon}</span>
          <span>{el.label}</span>
        </div>
      </Link>
    );
  };
  return (
    <div className="w-full  h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-500 p-2 rounded-full">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">Planix</span>
      </h1>

      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      <div className="">
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800">
          <MdSettings />
          <span>Ajustes</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
