export default function Nav() {
  return (
    <nav className="inline-flex items-center justify-between w-full px-4 py-2 shadow-md fixed backdrop-blur h-18 top-0 z-[2]">
      <div className="flex items-center gap-2">
        <img
          src="image.jpg"
          alt="camera-image"
          className="h-8 w-8 object-cover rounded-full"
        />
        <span className="font-bold text-lg w-20">CCTV Monitor</span>
      </div>

      <ul className="flex w-[550px] justify-between px-2 text-gray-500">
        {[
          "Dashboard",
          "Live Cameras",
          "Manage Cameras",
          "Clients",
          "Maintenance",
          "Reports",
        ].map((item, idx) => (
          <li
            key={idx}
            className="flex-1 flex justify-center items-center text-center px-1 break-words whitespace-normal text-sm"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search cameras or clients..."
            className="px-2 py-1 border border-gray-300 rounded w-80 text-sm"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>

        <button className="bg-black text-white px-3 py-1 rounded hover:bg-stone-700">
          + Add Camera
        </button>

        <div className="relative">
          <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </div>
        </div>

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </nav>
  );
}
