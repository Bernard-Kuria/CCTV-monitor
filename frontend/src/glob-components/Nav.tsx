import { useContext } from "react";
import { ThemeContext } from "./context/UserContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext is missing!");

  const { theme, setTheme } = context;

  return (
    <nav className="inline-flex items-center justify-between w-full px-4 py-2 shadow-[0_4px_6px_-1px_rgba(51,51,51,_0.1)] fixed backdrop-blur h-18 top-0 z-[2] dark:shadow-[0_4px_6px_-1px_rgba(153,153,153,_0.1)]">
      <div className="flex items-center gap-2">
        <img
          src="image.jpg"
          alt="camera-image"
          className="h-8 w-8 object-cover rounded-full"
        />
        <span className="font-bold text-lg w-20 dark:text-gray-100">
          CCTV Monitor
        </span>
      </div>

      <ul className="flex w-[550px] justify-between px-2 text-normal">
        <li className="flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal hover:text-black">
          <Link to={`../dashboard`}>dashboard</Link>
        </li>
        <li className="flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal hover:text-black">
          <Link to={`../feed`}>Live Cameras</Link>
        </li>
        <li className="flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal hover:text-black">
          <Link to={`../management`}>Manage Cameras</Link>
        </li>
        <li className="flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal hover:text-black">
          <Link to={`../clients`}>Clients</Link>
        </li>
        <li className="flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal hover:text-black">
          <Link to={`../maintenance`}>Maintenance</Link>
        </li>
        <li className="flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal hover:text-black">
          <Link to={`../reports`}>Reports</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search cameras or clients..."
            className="input"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>

        <button className="button">+ Add Camera</button>

        <div className="relative">
          <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </div>
        </div>

        <button
          className="theme cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-green-500 transition"
          onClick={() => setTheme(theme === "bright" ? "dark" : "bright")}
        >
          <FontAwesomeIcon
            className="text-black dark:text-white"
            icon={theme === "dark" ? "sun" : "moon"}
          />
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </nav>
  );
}
