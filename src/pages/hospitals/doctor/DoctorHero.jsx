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
import { UserPlus, Pencil, Trash2, X } from "lucide-react";

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
            <div className="flex flex-col md:flex-row gap-4 px-20">
                <div className="flex-1 rounded-2xl h-40 md:h-20">
                    <p className="text-[80px] font-bold leading-none ">Doctor's</p>
                </div>
                <div className="flex-1 flex flex-col items-end pr-2 pt-2 rounded-2xl ">
                    <ButtonModal choice={'doctorForm'}> Add Doctor </ButtonModal>
                    <p className="text-lg font-semibold pr-2 mt-2">{doctors.length} : Doctor's</p>
                </div>
            </div>

            <div className="flex items-center justify-center mb-5">
                <hr className="w-[90%] border-gray-300" />
            </div>

            {/* Main content */}
            <div className=" rounded-2xl h-103.75 flex-1">
                <DoctorsList />
            </div>

            <footer className="mt-10 p-10">
                <p className="text-gray-300 text-[100px] font-bold leading-22" >
                    People's who <br /> save life's
                </p>
            </footer>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctorsList.map(doc => (
                    <div key={doc.id}
                        className="relative w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all">

                        {/* Top Section */}
                        <div className="flex items-center gap-4">
                            <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-slate-800">
                                    {doc.name}
                                </h2>
                                <p className="text-sm text-slate-500">
                                    {doc.department}
                                </p>
                                <p className="text-xs text-slate-400">
                                    ID: {doc.nic}
                                </p>
                            </div>

                            <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                                Available
                            </span>

                        </div>

                        {/* Stats */}
                        <div className="flex justify-around mt-5 text-center">
                            <div>
                                <p className="text-lg font-bold text-blue-600">{doc.experience}+</p>
                                <p className="text-xs text-slate-500">Experience</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold text-green-600">4.8</p>
                                <p className="text-xs text-slate-500">Rating</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold text-orange-500">320+</p>
                                <p className="text-xs text-slate-500">Patients</p>
                            </div>

                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 mt-5">
                            <button
                                onClick={() => setSelectedDoctor(doc)}
                                className="flex-1 cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition">
                                View Profile
                            </button>

                            <div className="flex gap-2">
                                <button onClick={(e) => handleEditOpen(e, doc)}
                                    className="p-2 rounded-lg text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition">
                                    <Pencil size={16} />
                                </button>
                                <button onClick={(e) => handleDelete(e, doc.id)}
                                    className="p-2 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 transition">
                                    <Trash2 size={16} />
                                </button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            {/* VIEW MODAL */}
            {selectedDoctor && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                    {/* Modal */}
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative animate-fadeIn">

                        {/* Close */}
                        <button
                            onClick={() => setSelectedDoctor(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 cursor-pointer"
                        >
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div className="flex items-center gap-4 mb-5">
                            <img
                                src={selectedDoctor.image}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">
                                    Dr. {selectedDoctor.name}
                                </h2>
                                <p className="text-sm text-slate-500">
                                    {selectedDoctor.department}
                                </p>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4 text-sm">

                            <div>
                                <p className="text-slate-400">Email</p>
                                <p className="font-medium">{selectedDoctor.email}</p>
                            </div>

                            <div>
                                <p className="text-slate-400">Phone</p>
                                <p className="font-medium">{selectedDoctor.phone}</p>
                            </div>

                            <div>
                                <p className="text-slate-400">DOB</p>
                                <p className="font-medium">{selectedDoctor.dob}</p>
                            </div>

                            <div>
                                <p className="text-slate-400">Gender</p>
                                <p className="font-medium">{selectedDoctor.gender}</p>
                            </div>

                            <div>
                                <p className="text-slate-400">Experience</p>
                                <p className="font-medium">{selectedDoctor.experience}</p>
                            </div>

                            <div>
                                <p className="text-slate-400">Qualification</p>
                                <p className="font-medium">{selectedDoctor.qualification}</p>
                            </div>

                            <div>
                                <p className="text-slate-400">NIC</p>
                                <p className="font-medium">{selectedDoctor.nic}</p>
                            </div>

                        </div>

                        {/* Address full width */}
                        <div className="mt-4">
                            <p className="text-slate-400 text-sm">Address</p>
                            <p className="font-medium">{selectedDoctor.address}</p>
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




