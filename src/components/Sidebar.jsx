import DrawerWithSides from "@/components/DrawerWithSides";
import { Bell, LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";


export default function Sidebar() {

    return (
        <div className="">

            <div className="flex relative">

                <div className="h-screen bg-gray-300/40 px-4 py-5 flex flex-col justify-between gap-5 sticky top-0 rounded-xl rounded-tr-lg">
                    <div className="flex flex-col gap-5">
                        <DrawerWithSides />
                        <Bell />
                    </div>
                    <div className="flex flex-col gap-5 mb-4">
                        <LogOut />
                    </div>
                    
                </div>

                <main className="p-4 pb-0 flex-1">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}
