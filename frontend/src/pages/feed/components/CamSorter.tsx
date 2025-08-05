export default function CamSorter() {
  return (
    <div className="border flex h-[80px] items-center justify-between p-5">
      <div className="flex gap-[20px]">
        <input className="input" type="text" placeholder="Search cameras ..." />
        <select name="" id="" className="selector">
          <option value="">All Clients</option>
          <option value="">TechCorp HQ</option>
          <option value="">RetailPlus Store</option>
          <option value="">OfficeMax Central</option>
        </select>

        <select name="" id="" className="selector">
          <option value="">All Status</option>
          <option value="">Online</option>
          <option value="">Offline</option>
          <option value="">Error</option>
          <option value="">Connecting</option>
        </select>
      </div>

      <div className="flex gap-[10px]">
        <button className="button">Auto-refresh</button>
        <div className="text-normal">| Div:</div>
        <button className="button">2x2</button>
        <button className="button">3x3</button>
        <button className="button">4x4</button>
      </div>
    </div>
  );
}
