import {
    RefreshCw,
    HelpCircle,
    Activity,
    Zap,
    Search,
    Printer,
    LayoutGrid,
    Bell,
} from "lucide-react";


export default function Topbar() {


    return (
        <div className="">

            {/* Topbar */}
            <header className="flex items-center gap-3 px-6 h-15 bg-white border-b-2 border-slate-200 shrink-0">
                <span className="font-bold text-slate-800">Arogya Predict</span>
                <span className="bg-slate-100 border border-slate-200 rounded-full px-3 py-1 text-xs text-slate-500 font-medium">
                    Health First
                </span>
                <div className="w-px h-5 bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-sm text-slate-500 font-medium">System Status</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-red-500">
                    <Activity /> 0/3
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold text-violet-600">
                    <Zap /> 2/2
                </span>
                <button className="p-1 rounded-md text-slate-400 hover:text-violet-600 hover:bg-violet-50 transition-colors">
                    <RefreshCw />
                </button>
                <div className="flex-1" />
                <button className="bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl px-5 py-2 text-sm font-semibold hover:opacity-90 transition-all shadow-md shadow-violet-200 whitespace-nowrap">
                    Profile
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-full text-slate-500 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600 transition-colors">
                    <HelpCircle />
                </button>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-48">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400" placeholder="Search" />
                    </div>
                    <button className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <Printer className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 relative">
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>
            </header>

        </div>
    );
}





