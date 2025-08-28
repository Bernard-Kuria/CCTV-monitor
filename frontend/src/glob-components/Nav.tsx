// modules
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// files
import { ThemeContext } from "./globalContext";
import { notifications } from "../data";

// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pages = {
  "": "dashboard",
  feed: "Live Cameras",
  management: "Manage Cameras",
  clients: "Clients",
  maintenance: "Maintenance",
  reports: "Reports",
};

export default function Nav() {
  const context = useContext(ThemeContext);
  const location = useLocation();
  if (!context) throw new Error("ThemeContext is missing!");

  const { theme, setTheme } = context;

  return (
    <nav className="inline-flex items-center justify-between w-full px-4 py-2 shadow-[0_4px_6px_-1px_rgba(51,51,51,_0.1)] fixed backdrop-blur h-18 left-0 top-0 z-[2] dark:shadow-[0_4px_6px_-1px_rgba(153,153,153,_0.1)]">
      <div className="flex items-center gap-2">
        <div className="py-2 px-1 bg-black rounded-[10px] bg-linear-135 from-blue-500 to-red-500">
          <FontAwesomeIcon
            className="h-8 w-8 object-cover rounded-full text-black"
            icon={["far", "camera"]}
          />
        </div>
        <span className="bg-linear-135 from-blue-500 to-red-500 text-transparent bg-clip-text font-bold text-md w-20">
          CCTV Monitor
        </span>
      </div>

      <ul className="flex w-[550px] justify-between px-2 text-normal">
        {Object.entries(pages).map(([pageUrl, pageName]) => (
          <li
            key={pageUrl}
            className={`flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal ${
              location.pathname === "/" + pageUrl
                ? "bg-black rounded-[10px] text-white dark:bg-white dark:text-black"
                : ""
            } `}
          >
            <Link to={`../${pageUrl}`}>{pageName}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="input camera-search flex gap-1 items-center focus-within:border-2 focus-within:shadow-md shadow-gray-500">
            <FontAwesomeIcon
              className="text-gray-400"
              icon="magnifying-glass"
            />
            <input
              type="text"
              placeholder="Search cameras or clients..."
              className="focus:outline-none"
            />
          </div>
        </div>

        <button className="button">+ Add Camera</button>

        <div className="relative cursor-pointer rounded p-1 hover:bg-gray-200 dark:hover:bg-gray-500 transition">
          <FontAwesomeIcon
            className="w-5 h-5 text-black dark:text-white"
            icon={["far", "bell"]}
          />
          <div className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {notifications.length}
          </div>
        </div>

        <button
          className="theme cursor-pointer p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-500 transition"
          onClick={() => setTheme(theme === "bright" ? "dark" : "bright")}
        >
          <FontAwesomeIcon
            className="text-black dark:text-white"
            icon={theme === "dark" ? "sun" : "moon"}
          />
        </button>

        <div className="profile"></div>
      </div>
    </nav>
  );
}
