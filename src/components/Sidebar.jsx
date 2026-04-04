import DrawerWithSides from "@/components/DrawerWithSides";
import { Bell, LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import { Sidebar2 } from "@/components/DrawerWithSides";
import Topbar from "./ui/Topbar";


export default function Sidebar() {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeNav, setActiveNav] = useState("generate");

    return (
        <div className="flex">

            {/* Sidebar */}
            <div className="fixed left-0 top-0 h-screen w-64">
                {/* <DrawerWithSides /> */}

                <Sidebar2
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    activeNav={activeNav}
                    setActiveNav={setActiveNav}
                />
            </div>

            {/* Main Content */}
            <main className={`${sidebarOpen ? "ml-64" : "ml-16"} relative flex-1 transition-all duration-300`}>
                <Topbar/>
                <Outlet />
            </main>

        </div>
    )
}


