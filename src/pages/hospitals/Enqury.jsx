import DrawerWithSides from "@/components/DrawerWithSides";

export default function Enqury() {

    return (
        <div className="">

            <div className="flex relative">

                <div className="h-screen bg-gray-300/40 px-2 py-4 sticky top-0 rounded-xl rounded-tr-lg">
                    <DrawerWithSides />
                </div>

                <main className="p-4 pb-0 flex-1">
                    <section className=" flex flex-col gap-4 ">

                        {/* Top cards */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 bg-violet-400 rounded-2xl h-40 md:h-56">
                                <p className="text-[200px] font-bold leading-none">Enqury</p>
                            </div>
                            <div className="flex-1 bg-amber-500 rounded-2xl h-40 md:h-56"></div>
                        </div>

                        {/* Main content */}
                        <div className=" bg-red-300 rounded-2xl h-115"></div>

                    </section>
                </main>

            </div>

            <div className="h-87.5 overflow-hidden flex items-end bg-red-800 rounded-t-2xl mt-5">
                <p className="text-[300px] font-bold leading-none">Enqury</p>
            </div>


        </div>
    )
}