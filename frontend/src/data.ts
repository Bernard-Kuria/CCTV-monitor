// ================= STAFF =================
export const staff = [
  {
    id: 1,
    name: "John Kim",
    email: "john.kim@cctvmonitor.com",
    password: "#123jk",
    role: "admin",
    createdAt: new Date("2022-11-15"),
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@cctvmonitor.com",
    password: "#456js",
    role: "technician",
    createdAt: new Date("2023-02-10"),
  },
  {
    id: 3,
    name: "James Bond",
    email: "james.bond@cctvmonitor.com",
    password: "#789jb",
    role: "client",
    createdAt: new Date("2023-05-01"),
  },
  {
    id: 4,
    name: "Bernard Kuria",
    email: "bernard.kuria@cctvmonitor.com",
    password: "#321bk",
    role: "admin",
    createdAt: new Date("2023-06-20"),
  },
  {
    id: 5,
    name: "Herald Harlem",
    email: "herald.harlem@cctvmonitor.com",
    password: "#654hh",
    role: "technician",
    createdAt: new Date("2024-01-08"),
  },
];

// ================= CLIENTS =================
export const clients = [
  {
    id: 1,
    name: "Tech Solutions Ltd",
    contact_person: "Michael Johnson",
    email: "contact@techsolutions.com",
    phone: "+1-555-123-4567",
    address: "123 Tech St, Silicon Valley, USA",
    industry: "Technology",
    active_since: new Date("2020-01-02"),
    status: "active",
  },
  {
    id: 2,
    name: "Law & Co",
    contact_person: "Sarah Williams",
    email: "info@lawco.com",
    phone: "+1-555-987-6543",
    address: "456 Law St, Anytown, USA",
    industry: "Legal",
    active_since: new Date("2020-04-02"),
    status: "active",
  },
  {
    id: 3,
    name: "Grand Hotel Group",
    contact_person: "Emily Carter",
    email: "emily.carter@grandhotel.com",
    phone: "+1-555-222-3344",
    address: "789 Grand Ave, Metropolis, USA",
    industry: "Hospitality",
    active_since: new Date("2021-07-15"),
    status: "inactive",
  },
  {
    id: 4,
    name: "MediCare Inc",
    contact_person: "Dr. Alan Lee",
    email: "contact@medicareinc.com",
    phone: "+1-555-333-7788",
    address: "321 Health Blvd, Wellness City, USA",
    industry: "Healthcare",
    active_since: new Date("2022-02-10"),
    status: "active",
  },
];

// ================= CONTRACTS =================
export const contracts = [
  {
    id: 1,
    client_id: 1,
    contract_code: "TSL-2023-01",
    start_date: new Date("2023-01-01"),
    end_date: new Date("2024-01-01"),
    sla: "24/7 support",
    value: 5000,
    status: "active",
  },
  {
    id: 2,
    client_id: 2,
    contract_code: "LCO-2024-02",
    start_date: new Date("2024-04-06"),
    end_date: new Date("2026-01-01"),
    sla: "Business hours support",
    value: 9000,
    status: "active",
  },
  {
    id: 3,
    client_id: 3,
    contract_code: "GHG-2025-03",
    start_date: new Date("2025-01-04"),
    end_date: new Date("2027-01-01"),
    sla: "24/7 support",
    value: 11000,
    status: "inactive",
  },
];

// ================= DEVICES =================
export const devices = [
  {
    id: 1,
    client_id: 1,
    location: "Head Office Lobby",
    model: "Hikvision DS-2CD2143G0",
    quality: "1080p",
    ip_address: "192.168.1.10",
    status: "online",
    last_active: new Date(),
    camera_feed_url: "http://192.168.1.10/stream",
    installed_on: new Date("2020-02-01"),
    uptime_percentage: 99.85, // derived from downtime logs
    uptime_percentage_prev: 99.65, // derived from downtime logs
    signal_strength: 92, // normalized to % (RSSI / bitrate score)
  },
  {
    id: 2,
    client_id: 1,
    location: "Server Room",
    model: "Dahua IPC-HFW4431R-Z",
    quality: "4K",
    ip_address: "192.168.1.11",
    status: "offline",
    last_active: new Date("2024-12-25"),
    camera_feed_url: "http://192.168.1.11/stream",
    installed_on: new Date("2021-05-12"),
    uptime_percentage: 87.42,
    uptime_percentage_prev: 87.4,
    signal_strength: 68,
  },
  {
    id: 3,
    client_id: 2,
    location: "Reception Entrance",
    model: "Axis M3045-V",
    quality: "1080p",
    ip_address: "192.168.2.5",
    status: "online",
    last_active: new Date(),
    camera_feed_url: "http://192.168.2.5/stream",
    installed_on: new Date("2022-03-18"),
    uptime_percentage: 99.92,
    uptime_percentage_prev: 99.0,
    signal_strength: 88,
  },
  {
    id: 4,
    client_id: 3,
    location: "Parking Lot",
    model: "Bosch NBN-73023BA",
    quality: "720p",
    ip_address: "192.168.3.20",
    status: "maintenance",
    last_active: new Date("2024-11-10"),
    camera_feed_url: "http://192.168.3.20/stream",
    installed_on: new Date("2021-09-10"),
    uptime_percentage: 96.34,
    uptime_percentage_prev: 96.45,
    signal_strength: 75,
  },
];

// ================= INCIDENTS =================
export const incidents = [
  {
    id: 1,
    device_id: 2,
    type: "downtime",
    description: "Camera offline in Server Room",
    detected_at: new Date("2024-12-25"),
    resolved_at: null,
    reported_by: "Jane Smith",
    resolution_notes: null,
    cost: 0,
  },
  {
    id: 2,
    device_id: 4,
    type: "malfunction",
    description: "Parking Lot camera not recording",
    detected_at: new Date("2024-11-10"),
    resolved_at: new Date("2024-11-12"),
    reported_by: "Emily Carter",
    resolution_notes: "Replaced faulty SD card.",
    cost: 120,
  },
  {
    id: 3,
    device_id: 1,
    type: "theft",
    description: "Camera stolen from Head Office Lobby",
    detected_at: new Date("2023-01-13"),
    resolved_at: new Date("2023-01-20"),
    reported_by: "Michael Johnson",
    resolution_notes: "Camera replaced and police notified.",
    cost: 950,
  },
];

// ================= MAINTENANCE =================
export const maintenance = [
  {
    id: 1,
    device_id: 1,
    performed_by: "Bernard Kuria",
    activity: "Lens cleaning",
    performed_on: new Date("2024-01-10"),
    next_due: new Date("2024-04-10"),
  },
  {
    id: 2,
    device_id: 2,
    performed_by: "Jane Smith",
    activity: "Firmware update",
    performed_on: new Date("2024-06-15"),
    next_due: new Date("2024-12-15"),
  },
  {
    id: 3,
    device_id: 3,
    performed_by: "Herald Harlem",
    activity: "Cable check",
    performed_on: new Date("2024-03-20"),
    next_due: new Date("2024-09-20"),
  },
  {
    id: 4,
    device_id: 4,
    performed_by: "Jane Smith",
    activity: "SD card replacement",
    performed_on: new Date("2024-11-12"),
    next_due: new Date("2025-05-12"),
  },
];

// ================= FINANCIALS =================
export const financials = [
  {
    id: 1,
    client_id: 1,
    month: "2023-01",
    revenue: 1200.0,
    expenses: 600.0,
    profit: 600.0,
  },
  {
    id: 2,
    client_id: 2,
    month: "2023-01",
    revenue: 1500.0,
    expenses: 700.0,
    profit: 800.0,
  },
  {
    id: 3,
    client_id: 3,
    month: "2023-01",
    revenue: 900.0,
    expenses: 400.0,
    profit: 500.0,
  },
  {
    id: 4,
    client_id: 1,
    month: "2023-02",
    revenue: 1250.0,
    expenses: 650.0,
    profit: 600.0,
  },
];

// ================= REPORTS =================
export const reports = [
  {
    id: 1,
    client_id: 1,
    report_type: "monthly",
    generated_at: new Date("2024-12-30"),
    file_url: "http://reports.techsolutions.com/2024-12.pdf",
  },
  {
    id: 2,
    client_id: 2,
    report_type: "quarterly",
    generated_at: new Date("2024-10-01"),
    file_url: "http://reports.lawco.com/2024-Q3.pdf",
  },
  {
    id: 3,
    client_id: 3,
    report_type: "annual",
    generated_at: new Date("2024-01-05"),
    file_url: "http://reports.grandhotel.com/2023.pdf",
  },
];

// ================= NOTIFICATIONS =================
export const notifications = [
  {
    id: 1,
    user_id: 1,
    message: "Your December monthly report is ready for download.",
    type: "info",
    read: false,
    created_at: new Date("2024-12-30"),
  },
  {
    id: 2,
    user_id: 2,
    message: "Camera offline in Server Room.",
    type: "alert",
    read: false,
    created_at: new Date("2024-12-25"),
  },
  {
    id: 3,
    user_id: 3,
    message: "Maintenance scheduled for Reception Entrance camera.",
    type: "warning",
    read: false,
    created_at: new Date("2024-12-20"),
  },
  {
    id: 4,
    user_id: 4,
    message: "Firmware update completed for Dahua IPC-HFW4431R-Z.",
    type: "message",
    read: true,
    created_at: new Date("2024-06-15"),
  },
];
