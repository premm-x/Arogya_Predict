import doctor3d from "@/assets/doctor3d.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dashboard2 } from "./Dashbaord2";

// ---------------- HERO ----------------
export default function Hero() {
    return (
        <section className=" min-h-screen p-6 flex flex-col gap-6">

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* Admin Card */}
                <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-4 border-t-4 border-black">
                    <img src={doctor3d} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <h1 className="font-semibold text-lg">Admin Name</h1>
                        <p className="text-sm text-gray-500">Admin</p>
                    </div>
                </div>

                {/* KPI Cards */}
                {[
                    { title: "Patients", value: "58/120", color: "border-blue-500" },
                    { title: "Doctors", value: "32", color: "border-green-500" },
                    { title: "Staff", value: "48", color: "border-orange-500" },
                ].map((item, i) => (
                    <div key={i} className={`bg-white rounded-2xl shadow p-4 border-t-4 ${item.color}`}>
                        <p className="text-gray-500 text-sm">{item.title}</p>
                        <h1 className="text-2xl font-bold">{item.value}</h1>
                    </div>
                ))}
            </div>

            {/* Appointments */}
            <div className="bg-white rounded-2xl shadow p-6">
                <ResentAppointment />
            </div>

            {/* Enquiries */}
            <div className="bg-white rounded-2xl shadow p-6">
                <ResentEnqury />
            </div>

            <Dashboard2/>

        </section>
    );
}

// ---------------- APPOINTMENTS ----------------
const initialAppointments = [
    {
        id: 1,
        patient: "Jhon Doe",
        date: "2024-05-02",
        doctor: "Benjamin Reynolds",
        department: "Cardiology",
        status: "Rejected",
        visited: false,
    },
    {
        id: 2,
        patient: "Li Min Haw",
        date: "2024-04-28",
        doctor: "Olivia White",
        department: "Orthopedics",
        status: "Accepted",
        visited: true,
    },
    {
        id: 3,
        patient: "Alex Michael",
        date: "2024-06-01",
        doctor: "Harper Nelson",
        department: "Radiology",
        status: "Pending",
        visited: true,
    },
    {
        id: 4,
        patient: "Zeeshan Khan",
        date: "2024-05-26",
        doctor: "Noah Johnson",
        department: "ENT",
        status: "Accepted",
        visited: true,
    },
];

function ResentAppointment() {
    const [appointments, setAppointments] = useState(initialAppointments);
    const [rejectModal, setRejectModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [message, setMessage] = useState("");

    const handleStatusChange = (item, newStatus) => {
        if (newStatus === "Rejected") {
            setSelectedItem(item);
            setRejectModal(true);
            return;
        }

        setAppointments(prev =>
            prev.map(a =>
                a.id === item.id ? { ...a, status: newStatus } : a
            )
        );
    };

    const submitRejection = () => {
        setAppointments(prev =>
            prev.map(a =>
                a.id === selectedItem.id
                    ? { ...a, status: "Rejected" }
                    : a
            )
        );
        closeModal();
    };

    const closeModal = () => {
        setRejectModal(false);
        setSelectedItem(null);
        setMessage("");
    };

    return (
        <div className="w-full">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Appointments</h2>
                <input
                    placeholder="Search..."
                    className="border px-3 py-1 rounded-lg text-sm"
                />
            </div>

            {/* Table */}
            <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="py-3 px-2 text-left">Patient</th>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Visited</th>
                    </tr>
                </thead>

                <tbody>
                    {appointments.map(item => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-2">{item.patient}</td>
                            <td>{item.date}</td>
                            <td>{item.doctor}</td>
                            <td>{item.department}</td>

                            <td>
                                <select
                                    value={item.status}
                                    onChange={e =>
                                        handleStatusChange(item, e.target.value)
                                    }
                                    className={`px-2 py-1 rounded-full text-xs font-medium 
                                    ${
                                        item.status === "Accepted" && "bg-green-100 text-green-700"
                                    }
                                    ${
                                        item.status === "Rejected" && "bg-red-100 text-red-700"
                                    }
                                    ${
                                        item.status === "Pending" && "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    <option>Accepted</option>
                                    <option>Rejected</option>
                                    <option>Pending</option>
                                </select>
                            </td>

                            <td>
                                <span
                                    className={`h-3 w-3 inline-block rounded-full ${
                                        item.visited ? "bg-green-500" : "bg-red-500"
                                    }`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {rejectModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-5 w-96">
                        <h3 className="font-semibold mb-3">
                            Reject Appointment
                        </h3>

                        <input
                            className="w-full border rounded p-2 mb-2"
                            placeholder="Enter rejection message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={closeModal}
                                className="px-3 py-1 border rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={submitRejection}
                                className="px-3 py-1 bg-red-600 text-white rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ---------------- ENQUIRIES ----------------
const enquriData = [
    { id: 1, timing: "12:02 AM", name: "ravi", message: "hi this is enquiry" },
    { id: 2, timing: "12:02 AM", name: "ravi", message: "hi this is enquiry" },
    { id: 3, timing: "12:02 AM", name: "ravi", message: "hi this is enquiry" },
    { id: 4, timing: "12:02 AM", name: "ravi", message: "hi this is enquiry" },
];

function ResentEnqury() {
    return (
        <div className="w-full">

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Recent Enquiries</h1>
                <Link to={"/enqury"} className="text-blue-600 text-sm">
                    View All →
                </Link>
            </div>

            <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="py-2 text-left">#</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>
                    {enquriData.map(item => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                            <td className="py-2">{item.id}</td>
                            <td>{item.timing}</td>
                            <td>{item.name}</td>
                            <td className="truncate max-w-[200px]">
                                {item.message}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}