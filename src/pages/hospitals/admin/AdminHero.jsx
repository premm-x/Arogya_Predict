
export default function AdminHero() {

    return (
        <section className=" flex flex-col gap-4 ">

            {/* Top cards */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-violet-400 rounded-2xl h-40 md:h-56">
                    <p className="text-[200px] font-bold leading-none">Admin</p>
                </div>
                <div className="flex-1 bg-amber-500 rounded-2xl h-40 md:h-56"></div>
            </div>

            {/* Main content */}
            <div className=" bg-red-300 rounded-2xl h-103.75"></div>

            {/* Extra sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-300 rounded-2xl h-80"></div>
                <div className="bg-red-300 rounded-2xl h-80"></div>
            </div>
            
            <div className="bg-red-300 rounded-2xl h-80"></div>
            <div className="bg-red-300 rounded-2xl h-80"></div>

        </section>

    )
}