import ButtonModal from "@/components/ButtonModal";
import { useState } from "react";
import { Button } from "@/components/ui/button"

import DrawerWithSides from "@/components/DrawerWithSides";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer"
import { PanelRight, X } from "lucide-react"
import { useNavigate } from "react-router-dom"


const doctors = [
    {
        id: 1,
        equiptment_Name: "Bed ",
        total: "12345678911",
        available: "1994-03-01",
        occcupied: "Cardiology",
        category: ["Female", "Male"],
        image: "https://i.pravatar.cc/200?img=47",
    },
    {
        id: 2,
        equiptment_Name: "medicies",
        total: "12345678911",
        available: "1994-03-01",
        occcupied: "Cardiology",
        category: ["Female", "Male"],
        image: "https://i.pravatar.cc/200?img=48",
    },
    {
        id: 3,
        equiptment_Name: "rooms",
        total: "12345678911",
        available: "1994-03-01",
        occcupied: "Cardiology",
        category: ["Female", "Male"],
        image: "https://i.pravatar.cc/200?img=49",
    },
];

export default function Equipt() {

    return (
        <div className="">

            <section className=" flex flex-col gap-4 ">

                {/* Top cards */}
                <div className="flex flex-col md:flex-row gap-4 ">
                    <div className="flex-1 rounded-2xl h-40 md:h-56">
                        <p className="text-[170px] font-bold leading-none">Equiptment's</p>
                    </div>
                    <div className=" flex-1 flex flex-col items-end pr-2 pt-2 rounded-2xl ">
                        <ButtonModal choice={'doctorForm'}> Add Equiptment </ButtonModal>
                    </div>
                </div>

                <div className="flex items-center justify-center mb-5">
                    <hr className="w-[90%] border-gray-300" />
                </div>

                {/* Main content */}
                <div className=" rounded-2xl h-103.75 flex-1">
                    <DoctorsList />
                </div>

            </section>

        </div>
    )
}





const navList = [
    {
        "item": "Home",
        "link": "/",
    },
    {
        "item": "Doctor",
        "link": "/doctor",
    },
    {
        "item": "Patient",
        "link": "/patient",
    },
    {
        "item": "Admin",
        "link": "/admin",
    },
    {
        "item": "Equiptment",
        "link": "/equipt",
    },
    {
        "item": "Appointments",
        "link": "/appointments",
    },
    {
        "item": "Enqury messages",
        "link": "/enqury",
    },
]

export function DoctorsList() {

    const navigate = useNavigate();

    const [doctorsList, setDoctorsList] = useState(doctors)
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [editDoctor, setEditDoctor] = useState(null)

    let side = "right";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-18 ">
            {

                doctorsList.map((doc) => (
                    <Drawer key={side} direction={side === "bottom" ? undefined : side}>

                        <DrawerTrigger asChild>

                            <div
                                key={doc.id}
                                onClick={() => setSelectedDoctor(doc)}
                                className="bg-white border rounded-xl p-4 shadow hover:shadow-lg cursor-pointer relative"
                            >

                                <div className="flex justify-center">
                                    <img
                                        src={doc.image}
                                        alt={doc.equiptment_Name}
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                </div>

                                <div className="mt-4 text-sm space-y-1">
                                    <p className="font-semibold text-center">{doc.equiptment_Name}</p>
                                </div>
                            </div>

                        </DrawerTrigger>

                        <DrawerContent className="w-[80%] bg-background">
                            <div className="h-full overflow-y-auto px-6 py-5">

                                {/* HEADER */}
                                <DrawerHeader className="px-0 pb-4 border-b">
                                    <DrawerTitle className="text-2xl font-semibold">
                                        Drawer Title
                                    </DrawerTitle>
                                    <DrawerDescription className="text-sm text-muted-foreground">
                                        Some description text goes here
                                    </DrawerDescription>
                                </DrawerHeader>

                                {/* STATS SECTION */}
                                <div className="mt-6 rounded-xl bg-muted/40 p-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="rounded-lg bg-background border p-4 text-center shadow-sm">
                                            <p className="text-xs text-muted-foreground uppercase">
                                                Metric 1
                                            </p>
                                            <p className="mt-1 text-2xl font-bold">
                                                240
                                            </p>
                                        </div>

                                        <div className="rounded-lg bg-background border p-4 text-center shadow-sm">
                                            <p className="text-xs text-muted-foreground uppercase">
                                                Metric 2
                                            </p>
                                            <p className="mt-1 text-2xl font-bold">
                                                40 / 10
                                            </p>
                                        </div>

                                        <div className="rounded-lg bg-background border p-4 text-center shadow-sm">
                                            <p className="text-xs text-muted-foreground uppercase">
                                                Metric 3
                                            </p>
                                            <p className="mt-1 text-2xl font-bold">
                                                20
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="mt-6 space-y-3">
                                    <h4 className="text-sm font-medium">
                                        Details
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        This is long content or description area.
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        It can span multiple lines just like your sketch.
                                    </p>
                                </div>

                            </div>
                        </DrawerContent>


                    </Drawer>
                ))
            }
        </div>
    )
}



