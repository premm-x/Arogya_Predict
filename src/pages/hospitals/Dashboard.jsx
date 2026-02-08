import DrawerWithSides from "../../components/DrawerWithSides"
import Hero from "../../components/sections/Hero"



export default function Dashboard() {

    return (
        <div className="">
            <div className="flex relative">

                <div className="h-screen bg-gray-300/40 px-2 py-4 sticky top-0 rounded-xl rounded-tr-lg">
                    <DrawerWithSides />
                </div>

                <main className="p-4 pb-0 flex-1">
                    <Hero />
                </main>

            </div>

            <div className="h-87.5 overflow-hidden flex items-end bg-red-800 rounded-t-2xl mt-5">
                <p className="text-[300px] font-bold leading-none">Footer</p>
            </div>


        </div>
    )
}