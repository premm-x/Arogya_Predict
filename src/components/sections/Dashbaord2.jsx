
import { useState } from "react";
import {
    LayoutDashboard,
    Calendar,
    Stethoscope,
    Users,
    CreditCard,
    Clock,
    FileText,
    Search,
    Printer,
    LayoutGrid,
    Bell,
    ChevronDown,
    Star,
    PanelLeftClose,
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    Area,
    AreaChart,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const revenueData = [
    { month: "JAN", value: 20000 },
    { month: "FEB", value: 35000 },
    { month: "MAR", value: 28000 },
    { month: "APR", value: 45000 },
    { month: "MAY", value: 38000 },
    { month: "JUN", value: 62000 },
    { month: "JUL", value: 50000 },
    { month: "AUG", value: 55000 },
    { month: "SEP", value: 42000 },
    { month: "OCT", value: 48000 },
    { month: "NOV", value: 44000 },
    { month: "DEC", value: 52000 },
];

const appointments = [
    {
        doctor: "Dr. Tomás Rivera",
        role: "Dentist",
        time: "10:00 AM",
        date: "Jul 2, 2025",
        patient: "John Smith",
        age: 28,
        treatment: "Dental Cleaning",
        payment: "Pending",
        status: "In progress",
        statusColor: "text-blue-500",
        avatar: "https://i.pravatar.cc/32?img=11",
        patientAvatar: "https://i.pravatar.cc/32?img=1",
    },
    {
        doctor: "Dr. Lisa Ray",
        role: "Orthodontist",
        time: "11:30 AM",
        date: "Jul 3, 2025",
        patient: "Maya Patel",
        age: 34,
        treatment: "Braces Checkup",
        payment: "Paid",
        status: "Completed",
        statusColor: "text-green-500",
        avatar: "https://i.pravatar.cc/32?img=5",
        patientAvatar: "https://i.pravatar.cc/32?img=2",
    },
    {
        doctor: "Dr. Ahmed Khan",
        role: "Hygienist",
        time: "2:15 PM",
        date: "Jul 4, 2025",
        patient: "Carlos Reyes",
        age: 30,
        treatment: "Teeth Whitening",
        payment: "Unpaid",
        status: "Cancelled",
        statusColor: "text-red-500",
        avatar: "https://i.pravatar.cc/32?img=12",
        patientAvatar: "https://i.pravatar.cc/32?img=3",
    },
    {
        doctor: "Dr. Noah Benson",
        role: "Orthodontist",
        time: "10:00 AM",
        date: "Jul 6, 2025",
        patient: "Eric Zhou",
        age: 23,
        treatment: "Braces Adjustment",
        payment: "Paid",
        status: "Completed",
        statusColor: "text-green-500",
        avatar: "https://i.pravatar.cc/32?img=13",
        patientAvatar: "https://i.pravatar.cc/32?img=4",
    },
    {
        doctor: "Dr. Ahmed Khan",
        role: "Hygienist",
        time: "2:15 PM",
        date: "Jul 4, 2025",
        patient: "Carlos Reyes",
        age: 30,
        treatment: "Teeth Whitening",
        payment: "Unpaid",
        status: "Cancelled",
        statusColor: "text-red-500",
        avatar: "https://i.pravatar.cc/32?img=12",
        patientAvatar: "https://i.pravatar.cc/32?img=3",
    },
    {
        doctor: "Dr. Noah Benson",
        role: "Orthodontist",
        time: "10:00 AM",
        date: "Jul 6, 2025",
        patient: "Eric Zhou",
        age: 23,
        treatment: "Braces Adjustment",
        payment: "Paid",
        status: "Completed",
        statusColor: "text-green-500",
        avatar: "https://i.pravatar.cc/32?img=13",
        patientAvatar: "https://i.pravatar.cc/32?img=4",
    },
];

const reviews = [
    {
        name: "Emily R.",
        date: "Jul 2, 2025",
        rating: 4.9,
        text: "Amazing experience! The doctor was friendly and explained everything clearly. No waiting time.",
        avatar: "https://i.pravatar.cc/40?img=47",
    },
    {
        name: "James T.",
        date: "Jul 2, 2025",
        rating: 5.0,
        text: "Overall good, but the appointment started 10 minutes late. Staff were very helpful though.",
        avatar: "https://i.pravatar.cc/40?img=68",
    },
    {
        name: "Ayesha M.",
        date: "Jul 3, 2025",
        rating: 4.8,
        text: "Very professional and clean environment. Would definitely recommend.",
        avatar: "https://i.pravatar.cc/40?img=49",
    },

];

const genderData = [
    { name: "Female", value: 54.4, color: "#f87171" },
    { name: "Male", value: 41.6, color: "#60a5fa" },
    { name: "Other", value: 4, color: "#a78bfa" },
];

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Calendar, label: "Appointments" },
    { icon: Stethoscope, label: "Doctors" },
    { icon: Users, label: "Patients" },
    { icon: CreditCard, label: "Finance" },
    { icon: Clock, label: "Scheduling" },
    { icon: FileText, label: "Reports" },
];

const MiniBar = ({ color, filled }) => (
    <div className="flex gap-px items-end h-8">
        {Array.from({ length: 30 }).map((_, i) => (
            <div
                key={i}
                className="w-1 rounded-sm"
                style={{
                    height: `${Math.random() * 60 + 20}%`,
                    backgroundColor: i < filled ? color : "#e5e7eb",
                    opacity: i < filled ? 1 : 0.5,
                }}
            />
        ))}
    </div>
);

const StatCard = ({ title, value, percent, color, barColor, filledCount, icon }) => (
    <div className="bg-white rounded-2xl p-4 flex-1 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{icon}</span>
            <span className="text-sm text-gray-500 font-medium">{title}</span>
        </div>
        <div className="flex items-end justify-between mb-2">
            <div>
                <span className="text-2xl font-bold text-gray-800">{value}</span>
                <span className="text-xs text-gray-400 ml-1">Total</span>
            </div>
            <span
                className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: color }}
            >
                {percent}%
            </span>
        </div>
        <MiniBar color={barColor} filled={filledCount} />
    </div>
);

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg shadow font-semibold">
                ${(payload[0].value / 1000).toFixed(0)}k
            </div>
        );
    }
    return null;
};

export function Dashboard2() {
    const [activeNav, setActiveNav] = useState("Dashboard");

    return (
        <div className="flex h-screen font-sans ">


            {/* Main */}
            <div className="flex-1 flex flex-col ">

                {/* Scrollable content */}
                <div className="flex-1 py-4 space-y-4">
                    {/* Stat Cards */}
                    <div className="flex gap-4">
                        {/* Admin Card */}
                        <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-4 border-t-4 border-black">
                            <img src="./doctor3d.png" className="w-16 h-16 rounded-full object-cover" />
                            <div>
                                <h1 className="font-semibold text-lg">Admin Name</h1>
                                <p className="text-sm text-gray-500">Admin</p>
                            </div>
                        </div>
                        <StatCard title="Patients" value="235" percent={86} color="#3b82f6" barColor="#ec4899" filledCount={26} icon="💗" />
                        <StatCard title="Doctors" value="150" percent={64} color="#6366f1" barColor="#6366f1" filledCount={20} icon="📋" />
                        <StatCard title="Pending" value="150" percent={43} color="#14b8a6" barColor="#14b8a6" filledCount={13} icon="🔵" />
                        <StatCard title="Cancelled" value="42" percent={24} color="#f97316" barColor="#ef4444" filledCount={8} icon="❌" />
                    </div>

                    {/* Charts Row */}
                    <div className="flex gap-4">
                        {/* Revenue Chart */}
                        <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-bold text-gray-800">Total Revenue</h2>
                                <button className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                                    This Year <ChevronDown className="w-3 h-3" />
                                </button>
                            </div>
                            <ResponsiveContainer width="100%" height={200}>
                                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <ReferenceLine x="JUN" stroke="#3b82f6" strokeWidth={2} strokeDasharray="0" />
                                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#revenueGrad)" dot={false} activeDot={{ r: 5, fill: "#3b82f6" }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Activity Manager */}
                        <div className="bg-white rounded-2xl p-5 w-80 shadow-sm border border-gray-100 shrink-0">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-bold text-gray-800">Activity manager</h2>
                                <button className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
                                    Today <ChevronDown className="w-3 h-3" />
                                </button>
                            </div>

                            <div className="flex gap-3">
                                {/* Doctors */}
                                <div className="flex-1">
                                    <p className="text-xs text-gray-500 mb-1 font-medium">Doctors</p>
                                    <p className="text-3xl font-bold text-gray-800">142</p>
                                    <p className="text-xs text-gray-400">Available doctors</p>
                                    <div className="flex mt-3 -space-x-2">
                                        {[41, 42, 43, 44, 45].map((i) => (
                                            <img key={i} src={`https://i.pravatar.cc/24?img=${i}`} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                                        ))}
                                    </div>
                                </div>

                                {/* Patient */}
                                <div className="flex-1">
                                    <p className="text-xs text-gray-500 mb-1 font-medium">Patient</p>
                                    <p className="text-3xl font-bold text-gray-800">425</p>
                                    <p className="text-xs text-gray-400">Updated just now</p>
                                    <div className="mt-2 space-y-1.5">
                                        <div>
                                            <div className="flex justify-between text-xs mb-0.5">
                                                <span className="text-gray-500">Checked In</span>
                                                <span className="font-semibold text-gray-700">520</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full">
                                                <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs mb-0.5">
                                                <span className="text-gray-500">Pending</span>
                                                <span className="font-semibold text-gray-700">215</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full">
                                                <div className="h-1.5 bg-red-400 rounded-full" style={{ width: "40%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs mb-0.5">
                                                <span className="text-gray-500">Canceled</span>
                                                <span className="font-semibold text-gray-700">45</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full">
                                                <div className="h-1.5 bg-gray-400 rounded-full" style={{ width: "10%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gender */}
                                <div className="flex-1">
                                    <p className="text-xs text-gray-500 mb-1 font-medium">Gender</p>
                                    <div className="relative flex items-center justify-center">
                                        <PieChart width={80} height={80}>
                                            <Pie data={genderData} cx={35} cy={35} innerRadius={24} outerRadius={36} dataKey="value" strokeWidth={0}>
                                                {genderData.map((entry, index) => (
                                                    <Cell key={index} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </div>
                                    <div className="space-y-0.5 mt-1">
                                        {genderData.map((g) => (
                                            <div key={g.name} className="flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: g.color }}></div>
                                                <span className="text-xs text-gray-500">{g.name}: {g.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex gap-4">
                        {/* Appointments Table */}
                        <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm border border-gray-100">
                            <h2 className="text-sm font-bold text-gray-800 mb-4">Appointments</h2>
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="text-gray-400 border-b border-gray-100">
                                        <th className="text-left pb-2 font-medium">Doctor</th>
                                        <th className="text-left pb-2 font-medium">Time & Date</th>
                                        <th className="text-left pb-2 font-medium">Patient</th>
                                        <th className="text-left pb-2 font-medium">Treatment Type</th>
                                        <th className="text-left pb-2 font-medium">Payment</th>
                                        <th className="text-left pb-2 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((a, i) => (
                                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="py-2.5">
                                                <div className="flex items-center gap-2">
                                                    <img src={a.avatar} alt="" className="w-7 h-7 rounded-full" />
                                                    <div>
                                                        <p className="font-semibold text-gray-700">{a.doctor}</p>
                                                        <p className="text-gray-400">{a.role}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2.5">
                                                <p className="font-semibold text-gray-700">{a.time}</p>
                                                <p className="text-gray-400">{a.date}</p>
                                            </td>
                                            <td className="py-2.5">
                                                <div className="flex items-center gap-2">
                                                    <img src={a.patientAvatar} alt="" className="w-7 h-7 rounded-full" />
                                                    <div>
                                                        <p className="font-semibold text-gray-700">{a.patient}</p>
                                                        <p className="text-gray-400">Age {a.age}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2.5 text-gray-600">{a.treatment}</td>
                                            <td className="py-2.5 text-gray-600">{a.payment}</td>
                                            <td className="py-2.5">
                                                <span className={`font-semibold ${a.statusColor}`}>{a.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Patient Reviews */}
                        <div className="bg-white rounded-2xl p-5  w-72 shadow-sm border border-gray-100 shrink-0">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-bold text-gray-800">Patient Reviews</h2>
                                <button className="text-xs text-blue-500 font-medium hover:text-blue-700">View All</button>
                            </div>
                            <div className="space-y-4">
                                {reviews.map((r, i) => (
                                    <div key={i} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <img src={r.avatar} alt="" className="w-8 h-8 rounded-full" />
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-800">{r.name}</p>
                                                <p className="text-xs text-gray-400">{r.date}</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-xs font-bold text-gray-700">{r.rating}</span>
                                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed">"{r.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}