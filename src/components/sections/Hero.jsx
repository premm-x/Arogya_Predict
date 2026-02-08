import doctor3d from "@/assets/doctor3d.png";
import { useState } from "react";

//---table
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom";
import ButtonModal from "../ButtonModal";
//---table



export default function Hero() {

    return (
        <section className=" flex flex-col gap-4 ">

            {/* Top cards */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-[30%] h-40 md:h-56 border-[3px] border-cyan-700/80 flex rounded-2xl ">
                    <div className="flex flex-col items-center justify-evenly px-1 pb-2">
                        <div>
                            <h1 className="text-lg font-medium">Admin : </h1>
                            <h1 className="text-2xl font-bold">Admin name</h1>
                        </div>
                        <p className="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <img src={doctor3d} alt="Doctor" />
                </div>

                <div className="w-[70%] flex flex-col md:flex-row gap-4">
                    <div className="w-[65%] relative border-[0.5px] border-cyan-50 rounded-2xl h-40 md:h-56 flex items-center overflow-hidden">

                        <div className="absolute inset-0 bg-linear-to-r opacity-[0.3] from-teal-600 via-cyan-600 to-blue-800 blur-2xl scale-110"></div>

                        <div className="border-r-2 border-teal-700 h-[70%] flex-1 flex flex-col items-center justify-center gap-5 pb-5">
                            <h1 className="text-[18px] font-semibold capitalize text-center leading-none">total patient / <br /> capacity</h1>
                            <p className="text-center text-4xl text-gray-900 font-extrabold leading-none">58/120</p>
                        </div>

                        <div className="border-r-2 border-teal-700 h-[70%] flex-1 flex flex-col items-center justify-center gap-5 pb-5">
                            <h1 className="text-[18px] font-semibold capitalize text-center leading-none">total doctor's</h1>
                            <p className="text-center text-[40px] text-gray-900 font-extrabold leading-none">32</p>
                        </div>

                        <div className="border-r-2 border-teal-700 h-[70%] flex-1 flex flex-col items-center justify-center gap-5 pb-5">
                            <h1 className="text-[18px] font-semibold capitalize text-center leading-none">total stuff</h1>
                            <p className="text-center text-[40px] text-gray-900 font-extrabold leading-none">48</p>
                        </div>

                        <div className=" h-[70%] flex-1 flex flex-col items-center justify-center gap-5 pb-5">
                            <h1 className="text-[18px] font-semibold capitalize text-center leading-none">admin's</h1>
                            <p className="text-center text-[40px] text-gray-900 font-extrabold leading-none">5</p>
                        </div>
                    </div>

                    <div className="w-[35%] bg-teal-300/40 rounded-2xl h-40 md:h-56 flex flex-col overflow-hidden px-4">

                        <div className="flex-1 border-b-2 border-gray-900 flex items-center justify-center gap-5 ">
                            <h1 className="text-[18px] font-semibold capitalize text-left leading-none ">today's Appointments / <br /> completed</h1>
                            <p className="text-center text-xl text-gray-900 font-bold leading-none">:</p>
                            <p className="text-center text-4xl text-gray-900 font-extrabold leading-none">120/60</p>
                        </div>

                        <div className="flex-1 flex items-center justify-center gap-6">
                            <h1 className="text-[18px] font-semibold capitalize text-left leading-none  ">today's enquiries </h1>
                            <p className="text-center text-xl text-gray-900 font-bold leading-none">:</p>
                            <p className="text-center text-4xl text-gray-900 font-extrabold leading-none">49</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="border-2 border-gray-400 rounded-2xl h-103.75">
                <ResentAppointment />
            </div>

            {/* Extra sections */}
            <div className="flex  gap-4">
                <div className="bg-gray-100/20 rounded-2xl border-2 border-gray-400  flex-1">
                    <ResentEnqury />
                </div>
                <div className="bg-red-300 rounded-2xl  flex-1"></div>
            </div>

            <div className="bg-red-300 rounded-2xl h-80"></div>

        </section>

    )
}




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

const statusStyles = {
    Accepted: "text-green-600",
    Rejected: "text-red-600",
    Pending: "text-yellow-500",
};

export function ResentAppointment() {
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
        if (!message.trim()) return; // safety check

        const rejectionPayload = {
            id: selectedItem.id,
            patient: selectedItem.patient,
            doctor: selectedItem.doctor,
            department: selectedItem.department,
            date: selectedItem.date,
            message: message,
        };

        console.log("Rejected data:", rejectionPayload);

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
        <div className="bg-white rounded-xl p-6 w-full overflow-x-auto">
            <h2 className="font-semibold text-lg mb-4">
                Appointments Request's
            </h2>

            <table className="w-full text-sm">
                <thead className="text-left text-gray-500 border-b">
                    <tr>
                        <th className="py-2">Patient</th>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Visited</th>
                    </tr>
                </thead>

                <tbody>
                    {appointments.map(item => (
                        <tr key={item.id} className="border-b last:border-none">
                            <td className="py-3">{item.patient}</td>
                            <td>{item.date}</td>
                            <td>{item.doctor}</td>
                            <td>{item.department}</td>

                            <td>
                                <select
                                    value={item.status}
                                    onChange={e =>
                                        handleStatusChange(item, e.target.value)
                                    }
                                    className={`bg-transparent font-medium outline-none ${statusStyles[item.status]}`}
                                >
                                    <option value="Accepted">Accepted</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </td>

                            <td>
                                <span
                                    className={`h-3 w-3 inline-block rounded-full ${item.visited ? "bg-green-500" : "bg-red-500"
                                        }`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
                                onClick={() => {
                                    if (!message.trim()) return;
                                    submitRejection();
                                }}
                                className="px-3 py-1 bg-red-600 text-white rounded disabled:opacity-50"
                                disabled={!message.trim()}
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


const enquriData = [
    { id: 1, timing: "12:02 AM", name: "ravi", message: "hi this is enquri" },
    { id: 2, timing: "12:02 AM", name: "ravi", message: "hi this is enquri" },
    { id: 3, timing: "12:02 AM", name: "ravi", message: "hi this is enquri" },
    { id: 4, timing: "12:02 AM", name: "ravi", message: "hi this is enquri" },
    { id: 5, timing: "12:02 AM", name: "ravi", message: "hi this is enquri" },
]
const EnquriColumns = [
    {
        accessorKey: "id",
        header: "sr no.",
        cell: ({ row }) => `${row.getValue("id")}`,
    },
    {
        accessorKey: "timing",
        header: "Timing",
        cell: ({ row }) => `${row.getValue("timing")}`,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => `${row.getValue("name")}`,
    },
    {
        accessorKey: "message",
        header: "Message",
        cell: ({ row }) => `${row.getValue("message")}`,
    },
]

export function ResentEnqury() {
    const [data, setData] = useState(enquriData)
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})
    const [sorting, setSorting] = useState([])

    const table = useReactTable({
        data,
        columns: EnquriColumns,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
        <div className="w-full p-6">

            <div className="flex items-center justify-between px-2 ">
                <h1 className="text-xl font-bold underline mb-5">Resent Equries</h1>
                <Link to={"/enqury"} className="text-xl font-bold underline mb-5">See list /</Link>
            </div>

            {/* Table */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader className={"bg-gray-200"}>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody className={""}>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id} className={"py-3.5 font-medium"}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

        </div>
    )
}
