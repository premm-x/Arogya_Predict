import AppointmentTable from "@/components/AppointmentTable";
import DrawerWithSides from "@/components/DrawerWithSides";

export default function Appointment() {

    return (
        <div className="">

            <section className=" flex flex-col gap-4 ">

                {/* Top cards */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-violet-300/40 rounded-2xl ">
                        <p className="text-[180px] px-4 font-bold leading-none">Appointment</p>
                    </div>
                    <div className="flex-1 border-4 border-violet-300/60 rounded-2xl h-40 md:h-56"></div>
                </div>

                {/* Main content */}
                <div className=" border-2 border-violet-300/60 rounded-2xl flex-1">
                    <AppointmentTable />
                </div>

            </section>

        </div>
    )
}