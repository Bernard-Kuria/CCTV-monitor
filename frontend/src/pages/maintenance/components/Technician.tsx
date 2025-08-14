export default function Technician() {
  return (
    <div className="component-border p-5 relative hover:shadow-gray-300 duration-300 min-w-[350px] text-normal grid gap-5">
      <div className="flex gap-5 items-center">
        <div className="profile"></div>
        <div>
          <div className="technician-name text-bold">John Martinez</div>
          <div className="technician-role">Field Technician</div>
        </div>
      </div>

      <div className="technician-stats grid gap-5">
        <div className="stat-item relative">
          <div>
            Active Tasks <span className="absolute right-0 text-bold">2</span>
          </div>
        </div>
        <div className="stat-item relative">
          <div>
            Completed <span className="absolute right-0 text-bold">0</span>
          </div>
        </div>
        <div className="stat-item relative">
          <div>
            Total Tasks <span className="absolute right-0 text-bold">2</span>
          </div>
        </div>
        <button className="bright-button">View Schedule</button>
      </div>
    </div>
  );
}
