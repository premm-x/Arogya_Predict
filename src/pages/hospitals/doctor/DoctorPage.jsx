import DrawerWithSides from "@/components/DrawerWithSides";
import DoctorHero from "./DoctorHero";


export default function DoctorPage() {

    return (
        <div className="">
            
            <div className="flex relative mb-10">

                <div className="h-screen bg-gray-300/40 px-2 py-4 sticky top-0 rounded-xl rounded-tr-lg">
                    <DrawerWithSides />
                </div>

                <main className="p-4 pb-0 flex-1">
                    <DoctorHero />
                </main>

            </div>

        </div>
    )
}