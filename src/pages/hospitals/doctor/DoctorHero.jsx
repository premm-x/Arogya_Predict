import ButtonModal from "@/components/ButtonModal";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const doctors = [
    {
        id: 1,
        name: "Emma Robert",
        email: "emma@gmail.com",
        phone: "12345678911",
        dob: "1994-03-01",
        department: "Cardiology",
        nic: "1234567891234",
        gender: "Female",
        experience: "8 Years",
        qualification: "MBBS, MD",
        address: "New York, USA",
        image: "https://i.pravatar.cc/200?img=47",
    },
    {
        id: 2,
        name: "Olivia White",
        email: "olivia@gmail.com",
        phone: "12345678911",
        dob: "2000-01-01",
        department: "Orthopedics",
        nic: "1234567891234",
        gender: "Female",
        experience: "5 Years",
        qualification: "MBBS, MS",
        address: "California, USA",
        image: "https://i.pravatar.cc/200?img=48",
    },
    {
        id: 3,
        name: "Benjamin Reynolds",
        email: "ben@gmail.com",
        phone: "12345678911",
        dob: "1990-01-01",
        department: "Radiology",
        nic: "1234567891234",
        gender: "Male",
        experience: "10 Years",
        qualification: "MBBS, DM",
        address: "Texas, USA",
        image: "https://i.pravatar.cc/200?img=49",
    },
    {
        id: 4,
        name: "Emma Robert",
        email: "emma@gmail.com",
        phone: "12345678911",
        dob: "1994-03-01",
        department: "Cardiology",
        nic: "1234567891234",
        gender: "Female",
        experience: "8 Years",
        qualification: "MBBS, MD",
        address: "New York, USA",
        image: "https://i.pravatar.cc/200?img=47",
    },
    {
        id: 5,
        name: "Olivia White",
        email: "olivia@gmail.com",
        phone: "12345678911",
        dob: "2000-01-01",
        department: "Orthopedics",
        nic: "1234567891234",
        gender: "Female",
        experience: "5 Years",
        qualification: "MBBS, MS",
        address: "California, USA",
        image: "https://i.pravatar.cc/200?img=48",
    },
    {
        id: 6,
        name: "Benjamin Reynolds",
        email: "ben@gmail.com",
        phone: "12345678911",
        dob: "1990-01-01",
        department: "Radiology",
        nic: "1234567891234",
        gender: "Male",
        experience: "10 Years",
        qualification: "MBBS, DM",
        address: "Texas, USA",
        image: "https://i.pravatar.cc/200?img=49",
    },
    {
        id: 7,
        name: "Emma Robert",
        email: "emma@gmail.com",
        phone: "12345678911",
        dob: "1994-03-01",
        department: "Cardiology",
        nic: "1234567891234",
        gender: "Female",
        experience: "8 Years",
        qualification: "MBBS, MD",
        address: "New York, USA",
        image: "https://i.pravatar.cc/200?img=47",
    },
    {
        id: 8,
        name: "Olivia White",
        email: "olivia@gmail.com",
        phone: "12345678911",
        dob: "2000-01-01",
        department: "Orthopedics",
        nic: "1234567891234",
        gender: "Female",
        experience: "5 Years",
        qualification: "MBBS, MS",
        address: "California, USA",
        image: "https://i.pravatar.cc/200?img=48",
    },
    {
        id: 9,
        name: "Benjamin Reynolds",
        email: "ben@gmail.com",
        phone: "12345678911",
        dob: "1990-01-01",
        department: "Radiology",
        nic: "1234567891234",
        gender: "Male",
        experience: "10 Years",
        qualification: "MBBS, DM",
        address: "Texas, USA",
        image: "https://i.pravatar.cc/200?img=49",
    },
    {
        id: 10,
        name: "Emma Robert",
        email: "emma@gmail.com",
        phone: "12345678911",
        dob: "1994-03-01",
        department: "Cardiology",
        nic: "1234567891234",
        gender: "Female",
        experience: "8 Years",
        qualification: "MBBS, MD",
        address: "New York, USA",
        image: "https://i.pravatar.cc/200?img=47",
    },
    {
        id: 11,
        name: "Olivia White",
        email: "olivia@gmail.com",
        phone: "12345678911",
        dob: "2000-01-01",
        department: "Orthopedics",
        nic: "1234567891234",
        gender: "Female",
        experience: "5 Years",
        qualification: "MBBS, MS",
        address: "California, USA",
        image: "https://i.pravatar.cc/200?img=48",
    },
    {
        id: 12,
        name: "Benjamin Reynolds",
        email: "ben@gmail.com",
        phone: "12345678911",
        dob: "1990-01-01",
        department: "Radiology",
        nic: "1234567891234",
        gender: "Male",
        experience: "10 Years",
        qualification: "MBBS, DM",
        address: "Texas, USA",
        image: "https://i.pravatar.cc/200?img=49",
    },
];


export default function DoctorHero() {

    return (
        <section className=" flex flex-col gap-4 ">

            {/* Top cards */}
            <div className="flex flex-col md:flex-row gap-4 ">
                <div className="flex-1 rounded-2xl h-40 md:h-56">
                    <p className="text-[200px] font-bold leading-none">Doctor's</p>
                </div>
                <div className="flex-1 flex flex-col items-end pr-2 pt-2 rounded-2xl ">
                    <ButtonModal choice={'doctorForm'}> Add Doctor </ButtonModal>
                    <p className="text-lg font-semibold pr-2">{doctors.length} : Doctor's</p>
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

    )
}




export function DoctorsList() {
    const [doctorsList, setDoctorsList] = useState(doctors)
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [editDoctor, setEditDoctor] = useState(null)

    const handleDelete = (e, id) => {
        e.stopPropagation()
        if (!confirm("Delete this doctor?")) return
        setDoctorsList(prev => prev.filter(doc => doc.id !== id))
    }

    const handleEditOpen = (e, doctor) => {
        e.stopPropagation()
        setEditDoctor({ ...doctor })
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target
        setEditDoctor(prev => ({ ...prev, [name]: value }))
    }

    const handleEditSubmit = () => {
        setDoctorsList(prev =>
            prev.map(doc =>
                doc.id === editDoctor.id ? editDoctor : doc
            )
        )
        console.log("Updated Doctor:", editDoctor)
        setEditDoctor(null)
    }

    return (
        <>
            {/* DOCTOR CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctorsList.map(doc => (
                    <div
                        key={doc.id}
                        onClick={() => setSelectedDoctor(doc)}
                        className="bg-white rounded-xl p-4 shadow hover:shadow-lg cursor-pointer relative"
                    >
                        {/* ACTIONS */}
                        <div className="absolute top-3 right-3 flex gap-2">
                            <button
                                onClick={(e) => handleEditOpen(e, doc)}
                                className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={(e) => handleDelete(e, doc.id)}
                                className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded"
                            >
                                Delete
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-28 h-28 rounded-full object-cover"
                            />
                        </div>

                        <div className="mt-4 text-sm space-y-1">
                            <p className="font-semibold">{doc.name}</p>
                            <p><b>Email:</b> {doc.email}</p>
                            <p><b>Phone:</b> {doc.phone}</p>
                            <p><b>Department:</b> {doc.department}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* VIEW MODAL */}
            {selectedDoctor && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-white w-[90%] max-w-4xl rounded-xl p-6 relative">
                        <button
                            onClick={() => setSelectedDoctor(null)}
                            className="absolute top-3 right-3 text-xl"
                        >
                            ✕
                        </button>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            {Object.entries(selectedDoctor).map(([k, v]) => (
                                <p key={k}><b>{k}:</b> {v}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT MODAL */}
            {editDoctor && (
                <Dialog open>
                    <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                            <DialogTitle>Edit Doctor</DialogTitle>
                            <DialogDescription>
                                Update doctor details and confirm changes
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Name</Label>
                                <Input name="name" value={editDoctor.name} onChange={handleEditChange} />
                            </div>

                            <div>
                                <Label>Email</Label>
                                <Input name="email" value={editDoctor.email} onChange={handleEditChange} />
                            </div>

                            <div>
                                <Label>Phone</Label>
                                <Input name="phone" value={editDoctor.phone} onChange={handleEditChange} />
                            </div>

                            <div>
                                <Label>Department</Label>
                                <Input name="department" value={editDoctor.department} onChange={handleEditChange} />
                            </div>

                            <div>
                                <Label>Qualification</Label>
                                <Input name="qualification" value={editDoctor.qualification} onChange={handleEditChange} />
                            </div>

                            <div>
                                <Label>Experience</Label>
                                <Input name="experience" value={editDoctor.experience} onChange={handleEditChange} />
                            </div>
                        </div>

                        <DialogFooter className="mt-4">
                            <Button variant="secondary" onClick={() => setEditDoctor(null)}>
                                Cancel
                            </Button>
                            <Button onClick={handleEditSubmit}>
                                Confirm
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
}




