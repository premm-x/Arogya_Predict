import ButtonModal from "@/components/ButtonModal";
import { useState } from "react";



export default function PatientHero() {

    return (
        <section className=" flex flex-col gap-4 ">

            {/* Top cards */}
            <div className="flex flex-col md:flex-row gap-4 ">
                <div className="flex bg-blue-300/40 rounded-2xl h-40 md:h-20 px-24">
                    <p className="text-[80px] font-bold leading-none">Patient's</p>
                </div>
                <div className="flex-1  flex items-start justify-end pr-2 pt-2 rounded-2xl h-40 md:h-20">
                    <ButtonModal choice={'patienForm'}> Add Patient </ButtonModal>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <hr className="w-[90%] border-gray-300" />
            </div>

            {/* Main content */}
            <div className=" flex-1 rounded-2xl h-103.75">
                <PatientList />
            </div>

        </section>
    )
}



const initialPatients = [
    {
        id: 1,
        name: "John Doe",
        age: 45,
        gender: "Male",
        phone: "9876543210",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        doctorAssigned: "Dr. Olivia White",
        room: "A-102",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 2,
        name: "John Doe",
        age: 45,
        gender: "Male",
        phone: "9876543210",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        doctorAssigned: "Dr. Olivia White",
        room: "A-102",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
        id: 3,
        name: "John Doe",
        age: 45,
        gender: "Male",
        phone: "9876543210",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        doctorAssigned: "Dr. Olivia White",
        room: "A-102",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 4,
        name: "John Doe",
        age: 45,
        gender: "Male",
        phone: "9876543210",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        doctorAssigned: "Dr. Olivia White",
        room: "A-102",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
        id: 5,
        name: "John Doe",
        age: 45,
        gender: "Male",
        phone: "9876543210",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        doctorAssigned: "Dr. Olivia White",
        room: "A-102",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
        id: 6,
        name: "John Doe",
        age: 45,
        gender: "Male",
        phone: "9876543210",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        doctorAssigned: "Dr. Olivia White",
        room: "A-102",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=13",
    },
];

export function PatientList() {
    const [patients, setPatients] = useState(initialPatients);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [view, setView] = useState(false);
    const [modalType, setModalType] = useState(null); // admitted | discharged
    const [dateValue, setDateValue] = useState("");
    const [page, setPage] = useState(1);

    const pageSize = 5;
    const start = (page - 1) * pageSize;
    const paginatedPatients = patients.slice(start, start + pageSize);

    const openDateModal = (patient, type) => {
        setSelectedPatient(patient);
        setModalType(type);
        setDateValue("");
    };

    const saveDate = () => {
        if (!dateValue) return;

        setPatients(prev =>
            prev.map(p =>
                p.id === selectedPatient.id
                    ? {
                        ...p,
                        [modalType]: { value: "Yes", date: dateValue },
                    }
                    : p
            )
        );

        closeModal();
    };

    const closeModal = () => {
        setSelectedPatient(null);
        setModalType(null);
        setDateValue("");
    };

    return (
        <div className=" rounded-xl p-4">
            {/* HEADER */}
            <div className="hidden md:grid grid-cols-7 gap-4 text-sm font-semibold text-gray-600 border-b pb-2">
                <div>#</div>
                <div>Patient</div>
                <div>Problem</div>
                <div>Date / Time</div>
                <div>Admitted</div>
                <div>Discharged</div>
                <div>Action</div>
            </div>

            {/* ROWS */}
            {paginatedPatients.map((p, index) => (
                <div
                    key={p.id}
                    className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center py-3 border-b last:border-none text-sm"
                >
                    {/* SERIAL */}
                    <div className="hidden md:block">
                        {start + index + 1}
                    </div>

                    {/* PATIENT */}
                    <div className="flex items-center gap-3">
                        <img
                            src={p.avatar}
                            className="w-8 h-8 rounded-full"
                            alt=""
                        />
                        <span className="font-medium">{p.name}</span>
                    </div>

                    {/* PROBLEM */}
                    <div>{p.problem}</div>

                    {/* DATETIME */}
                    <div className="text-gray-500">{p.datetime}</div>

                    {/* ADMITTED */}
                    <div>
                        <select
                            value={p.admitted.value}
                            onChange={e =>
                                e.target.value === "Yes"
                                    ? openDateModal(p, "admitted")
                                    : setPatients(prev =>
                                        prev.map(x =>
                                            x.id === p.id
                                                ? {
                                                    ...x,
                                                    admitted: { value: "No", date: null },
                                                    discharged: { value: "No", date: null },
                                                }
                                                : x
                                        )
                                    )
                            }

                            className="border rounded px-2 py-1"
                        >
                            <option>No</option>
                            <option>Yes</option>
                        </select>

                        {p.admitted.date && (
                            <span className="ml-2 text-xs text-gray-500">
                                ({p.admitted.date})
                            </span>
                        )}
                    </div>

                    {/* DISCHARGED */}
                    <div>
                        <select
                            value={p.discharged.value}
                            disabled={p.admitted.value === "No"}
                            onChange={e =>
                                e.target.value === "Yes"
                                    ? openDateModal(p, "discharged")
                                    : setPatients(prev =>
                                        prev.map(x =>
                                            x.id === p.id
                                                ? {
                                                    ...x,
                                                    discharged: { value: "No", date: null },
                                                }
                                                : x
                                        )
                                    )
                            }
                            className={`border rounded px-2 py-1 ${p.admitted.value === "No"
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : ""
                                }`}
                        >
                            <option>No</option>
                            <option>Yes</option>
                        </select>


                        {p.discharged.date && (
                            <span className="ml-2 text-xs text-gray-500">
                                ({p.discharged.date})
                            </span>
                        )}
                    </div>

                    {/* VIEW */}
                    <div
                        onClick={() => { setSelectedPatient(p); setView(true) }}
                        className="text-blue-600 cursor-pointer text-xs"
                    >
                        View
                    </div>
                </div>
            ))}

            {/*  modal render */}
            {selectedPatient && view && (
                <PatientModal
                    patient={selectedPatient}
                    onClose={() => { setSelectedPatient(null); setView(false) }}
                />
            )}

            {/* PAGINATION */}
            <div className="flex items-center justify-between gap-2 mt-4">
                <p className="text-sm text-gray-600">
                    Total Patients: <span className="font-semibold">{patients.length}</span>
                </p>

                <div>
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(p => p - 1)}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <button
                        disabled={start + pageSize >= patients.length}
                        onClick={() => setPage(p => p + 1)}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* DATE MODAL */}
            {selectedPatient && !view && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg w-80">
                        <h3 className="font-semibold mb-3 capitalize">
                            Select {modalType} date
                        </h3>

                        <input
                            type="date"
                            value={dateValue}
                            onChange={e => setDateValue(e.target.value)}
                            className="w-full border rounded p-2 mb-4"
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={closeModal}
                                className="px-3 py-1 border rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveDate}
                                disabled={!dateValue}
                                className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}






//---------

import { X } from "lucide-react";

export function PatientModal({ patient, onClose }) {
    if (!patient) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            {/* Modal */}
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                    <img
                        src={patient.avatar}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">
                            {patient.name}
                        </h2>
                        <p className="text-sm text-slate-500">
                            {patient.problem}
                        </p>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">

                    <div>
                        <p className="text-slate-400">Age</p>
                        <p className="font-medium">{patient.age}</p>
                    </div>

                    <div>
                        <p className="text-slate-400">Gender</p>
                        <p className="font-medium">{patient.gender}</p>
                    </div>

                    <div>
                        <p className="text-slate-400">Phone</p>
                        <p className="font-medium">{patient.phone}</p>
                    </div>

                    <div>
                        <p className="text-slate-400">Appointment</p>
                        <p className="font-medium">{patient.datetime}</p>
                    </div>

                    <div>
                        <p className="text-slate-400">Doctor</p>
                        <p className="font-medium">{patient.doctorAssigned}</p>
                    </div>

                    <div>
                        <p className="text-slate-400">Room</p>
                        <p className="font-medium">{patient.room}</p>
                    </div>

                </div>

                {/* Status Section */}
                <div className="mt-5 space-y-2">

                    <div className="flex justify-between items-center bg-slate-100 p-3 rounded-lg">
                        <span className="text-sm text-slate-600">Admitted</span>
                        <span className={`text-sm font-semibold ${patient.admitted.value === "Yes" ? "text-green-600" : "text-red-500"
                            }`}>
                            {patient.admitted.value}
                        </span>
                    </div>

                    {patient.admitted.date && (
                        <p className="text-xs text-slate-400">
                            Date: {patient.admitted.date}
                        </p>
                    )}

                    <div className="flex justify-between items-center bg-slate-100 p-3 rounded-lg">
                        <span className="text-sm text-slate-600">Discharged</span>
                        <span className={`text-sm font-semibold ${patient.discharged.value === "Yes" ? "text-green-600" : "text-red-500"
                            }`}>
                            {patient.discharged.value}
                        </span>
                    </div>

                    {patient.discharged.date && (
                        <p className="text-xs text-slate-400">
                            Date: {patient.discharged.date}
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
}