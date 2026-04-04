import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

import {
  LayoutDashboard,
  Workflow,
  Upload,
  Sparkles,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Menu,
  ChevronRight,
  PanelsTopLeft,
  Stethoscope,
  Calendar,
  ShieldUser,
  FileText,
} from "lucide-react";

import { useState } from "react";


const navList = [
  { item: "Home", link: "/" },
  { item: "Doctor", link: "/doctor" },
  { item: "Patient", link: "/patient" },
  { item: "Admin", link: "/admin" },
  { item: "Equipment", link: "/equipt" },
  { item: "Appointments", link: "/appointments" },
  { item: "Enquiry messages", link: "/enqury" },
]

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className="w-64 h-screen border-r-2 bg-white flex flex-col justify-between p-5">

      {/* Top Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          Arogya predict
        </h2>
        <p className="text-sm text-gray-500 mt-1 text-center">
          Set your daily activity goal.
        </p>
      </div>

      {/* Menu */}
      <div className="flex flex-col items-center justify-center gap-6 flex-1">
        {navList.map((item, index) => (
          <Button
            key={index}
            variant="link"
            className="text-xl text-gray-800 hover:scale-105 transition"
            onClick={() => navigate(item.link)}
          >
            {item.item}
          </Button>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col gap-3">
        <Button
          className="bg-black text-white hover:bg-gray-900 rounded-lg"
          onClick={() => navigate("/admin/profile")}
        >
          Admin Profile
        </Button>

        <Button
          className="bg-black text-white hover:bg-gray-900 rounded-lg"
          onClick={() => navigate("/hospital/profile")}
        >
          Hospital Profile
        </Button>
      </div>

    </div>
  )
}





// ── Nav Items ─────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", link: "/", Icon: LayoutDashboard },
  { id: "Doctors", label: "Doctors List", link: "/doctor", Icon: Stethoscope },
  { id: "Patients", label: "Patients", link: "/patient", Icon: Users },
  { id: "Manage", label: "Manage Admin", link: "/admin", Icon: ShieldUser, hasArrow: true },
  { id: "Equiptment", label: "Equiptment", link: "/equipt", Icon: FileText },
  { id: "Appointments", label: "Appointments", link: "/appointments", Icon: Calendar },
  { id: "Enqury", label: "Enqury Message", link: "/enqury", Icon: BarChart3 },
];

// ── Sidebar Component ─────────────────────────────────────
export function Sidebar2({ sidebarOpen, setSidebarOpen, activeNav, setActiveNav }) {

  const navigate = useNavigate();

  return (
    <aside
      className={` h-screen flex flex-col shrink-0 bg-[#141414] transition-all duration-300 overflow-hidden 
        ${sidebarOpen ? "w-64" : "w-16"}`}
    >
      {/* Top */}
      <div className="flex items-center justify-end gap-3 px-5 h-15 border-b border-white/10">

        <span
          className={`text-white font-bold text-lg mr-4 transition-all ${sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
        >
          Arogya predict
        </span>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center justify-center p-1.5 cursor-pointer rounded-lg text-white hover:bg-white/15 transition-colors"
        >
          <PanelsTopLeft size={20} />
        </button>

      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-1 px-2 py-3 overflow-y-auto">
        {NAV_ITEMS.map(({ id, label, link, Icon, hasArrow }) => (
          <button
            key={id}
            onClick={() => { setActiveNav(id); navigate(link) }}
            title={!sidebarOpen ? label : undefined}
            className={`flex items-center justify-center gap-2 cursor-pointer py-2.5 rounded-xl text-sm font-medium transition-colors ${activeNav === id
              ? "bg-white/20 text-white "
              : "text-white/70 hover:bg-white/10 hover:text-white"
              } ${sidebarOpen ? "px-8" : "px-2"} `}
          >
            <Icon size={18} />

            <span
              className={`flex-1 transition-all ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 hidden"
                }`}
            >
              {label}
            </span>

            {activeNav === id && (
              <ChevronRight size={14} className="text-white/50" />
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div
        className={`px-4 py-3 border-t border-white/10 text-white/40 text-xs ${sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
      >

        <div className="flex flex-col gap-3">

          <Button
            className=" text-white border-2 border-gray-100 hover:border-gray-400 cursor-pointer rounded-lg"
            onClick={() => navigate("/hospital/profile")}
          >
            Hospital Profile
          </Button>

          <div
            className=" text-white flex items-center justify-start gap-5 px-4 py-2 overflow-visible hover:bg-[#2e2e2e] cursor-pointer rounded-lg"
            onClick={() => navigate("/admin/profile")}
          >
            <img src="/p3.jpg" alt="u" className="w-10 h-10 object-cover rounded-full" />

            <div>
              <p className="text-lg font-semibold" > vijay</p>
              <p className=""> Vijay123@gmail.com</p>
            </div>

          </div>

          {/* User */}
          {/* <div className="mx-3 mb-4  rounded-2xl p-4 text-center ">
            <div
              onClick={() => navigate("/admin/profile")}
              className="w-14 h-14 rounded-full mx-auto mb-2 overflow-hidden ring-2 cursor-pointer">
              <img src="/p3.jpg" alt="user" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-bold text-gray-100">John Marpaung</p>
            <p className="text-xs text-gray-200 mb-3">john@gmail.com</p>
            <div className="flex gap-1.5">
              <button className="flex-1 text-xs rounded-lg py-1 cursor-pointer text-gray-200 bg-gray-800 hover:bg-gray-500">Support</button>
              <button
                onClick={() => navigate("/admin/profile")}
                className="flex-1 text-xs rounded-lg py-1 cursor-pointer text-gray-200 bg-gray-800 hover:bg-gray-500">Profile</button>
              <button className="flex-1 text-xs rounded-lg py-1 cursor-pointer text-gray-200 bg-gray-800 hover:bg-gray-500">Settings</button>
            </div>
          </div> */}

        </div>

      </div>
    </aside>
  );
}