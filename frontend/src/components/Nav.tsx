export default function Nav() {
  return (
    <nav className="inline-flex items-center justify-between w-full px-4 py-2 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img
          src="image.jpg"
          alt="camera-image"
          className="h-8 w-8 object-cover rounded-full"
        />
        <span className="font-bold text-lg">CCTV Monitor</span>
      </div>

      <ul className="flex border border-black w-[550px] justify-between px-2">
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

      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border rounded"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>

        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
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
