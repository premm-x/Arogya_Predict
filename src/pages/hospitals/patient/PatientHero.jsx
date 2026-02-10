import ButtonModal from "@/components/ButtonModal";
import { useState } from "react";



export default function PatientHero() {

    return (
        <section className=" flex flex-col gap-4 ">

            {/* Top cards */}
            <div className="flex flex-col md:flex-row gap-4 ">
                <div className="flex-1 bg-blue-300/40 rounded-2xl h-40 md:h-56 px-24">
                    <p className="text-[200px] font-bold leading-none">Patient's</p>
                </div>
                <div className="flex-1  flex items-start justify-end pr-2 pt-2 rounded-2xl h-40 md:h-56">
                    <ButtonModal choice={'patienForm'}> Add Patient </ButtonModal>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <hr className="w-[90%] border-gray-300" />
            </div>

            {/* Main content */}
            <div className=" flex-1 border-2 border-gray-300 bg-gray-100/50 rounded-2xl h-103.75">
                <PatientList />
            </div>

        </section>
    )
}



const initialPatients = [
    {
        id: 1,
        name: "John Doe",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 2,
        name: "Alex Michael",
        problem: "Fracture",
        datetime: "2024-06-11 02:15 PM",
        admitted: { value: "Yes", date: "2024-06-11" },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
        id: 3,
        name: "Zeeshan Khan",
        problem: "ENT Infection",
        datetime: "2024-06-12 09:00 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
        id: 4,
        name: "John Doe",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 5,
        name: "Alex Michael",
        problem: "Fracture",
        datetime: "2024-06-11 02:15 PM",
        admitted: { value: "Yes", date: "2024-06-11" },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
        id: 6,
        name: "Zeeshan Khan",
        problem: "ENT Infection",
        datetime: "2024-06-12 09:00 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
        id: 7,
        name: "John Doe",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 8,
        name: "Alex Michael",
        problem: "Fracture",
        datetime: "2024-06-11 02:15 PM",
        admitted: { value: "Yes", date: "2024-06-11" },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
        id: 9,
        name: "Zeeshan Khan",
        problem: "ENT Infection",
        datetime: "2024-06-12 09:00 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=14",
    },
    {
        id: 10,
        name: "John Doe",
        problem: "Chest Pain",
        datetime: "2024-06-10 10:30 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 11,
        name: "Alex Michael",
        problem: "Fracture",
        datetime: "2024-06-11 02:15 PM",
        admitted: { value: "Yes", date: "2024-06-11" },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
        id: 12,
        name: "Zeeshan Khan",
        problem: "ENT Infection",
        datetime: "2024-06-12 09:00 AM",
        admitted: { value: "No", date: null },
        discharged: { value: "No", date: null },
        avatar: "https://i.pravatar.cc/100?img=14",
    },
];

export function PatientList() {
    const [patients, setPatients] = useState(initialPatients);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [modalType, setModalType] = useState(null); // admitted | discharged
    const [dateValue, setDateValue] = useState("");
    const [page, setPage] = useState(1);

    const pageSize = 10;
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
                        onClick={() => alert(JSON.stringify(p, null, 2))}
                        className="text-blue-600 cursor-pointer text-xs"
                    >
                        View
                    </div>
                </div>
            ))}

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
            {selectedPatient && (
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

