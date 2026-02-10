import { useEffect, useState } from "react";
import { Check } from "lucide-react";


let defaultAdmin = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@gmail.com",
        phone: "9876543210",
        gender: "Male",
        defaultPassword: "admin@123",
        createdAt: "10/02/2026, 10:15 AM"
    },
    {
        id: 2,
        name: "Neha Verma",
        email: "neha.verma@gmail.com",
        phone: "9123456789",
        gender: "Female",
        defaultPassword: "neha@123",
        createdAt: "09/02/2026, 04:40 PM"
    },
    {
        id: 3,
        name: "Amit Kumar",
        email: "amit.kumar@gmail.com",
        phone: "9988776655",
        gender: "Male",
        defaultPassword: "amit@123",
        createdAt: "08/02/2026, 11:05 AM"
    }
];


export default function AdminHero() {

    const [admins, setAdmins] = useState(defaultAdmin);
    
    return (
        <section className=" flex flex-col gap-4 ">

            {/* Top cards */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center justify-center bg-violet-400/40 rounded-2xl h-40 md:h-56">
                    <p className="text-[200px] font-bold leading-none">Admin</p>
                </div>
                <div className="flex-1 flex items-center justify-center gap-20 border-4 border-amber-400/30 rounded-2xl">
                    <p className="text-[90px] font-bold leading-none text-left">Total <br /> Admin's</p>
                    <p className="text-[80px] font-bold leading-none">:</p>
                    <p className="text-[100px] font-bold leading-none">{admins.length}</p>
                </div>
            </div>

            {/* Main content */}
            <div className=" rounded-2xl flex-1 flex items-start py-20 justify-center">
                <AdminFeatures admins={admins} setAdmins={setAdmins} />
            </div>

        </section>

    )
}





export function AdminFeatures({ admins, setAdmins }) {

    const [mode, setMode] = useState("none"); // none | view | add
    const [login, setLogin] = useState({ username: "", password: "" });
    const [showModal, setShowModal] = useState(false);

    const [newAdmin, setNewAdmin] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        defaultPassword: ""
    });

    const handleLoginSubmit = () => {
        if (login.username === "" && login.password === "") {
            setShowModal(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const handleAddAdmin = () => {
        const admin = {
            id: admins.length + 1,
            ...newAdmin,
            createdAt: new Date().toLocaleString()
        };

        console.log("New Admin Added:", admin);

        setAdmins((prev) => [...prev, admin]);
        setNewAdmin({
            name: "",
            email: "",
            phone: "",
            gender: "",
            defaultPassword: ""
        });
        setLogin({ username: "", password: "" });
        setShowModal(false);
        setMode("view");
    };

    return (
        <div className="p-6 space-y-6 flex flex-col items-center justify-center">
            {/* SWITCH */}
            <div className="inline-flex bg-gray-200 rounded-full p-1 gap-5">
                <SwitchBtn label="None" active={mode === "none"} onClick={() => setMode("none")} />
                <SwitchBtn label="View Admin's" active={mode === "view"} onClick={() => setMode("view")} />
                <SwitchBtn label="Add New Admin" active={mode === "add"} onClick={() => setMode("add")} />
            </div>

            {/* CONTENT */}
            {mode === "none" && (
                <p className="text-gray-500 text-center py-10">Choose any option</p>
            )}

            {/* VIEW ADMINS */}
            {mode === "view" && (
                <div className="border rounded overflow-hidden">
                    {/* HEADER */}
                    <div className="grid grid-cols-6 gap-4 font-semibold border-b p-3 bg-gray-50 text-sm">
                        <div>#</div>
                        <div>Admin</div>
                        <div>Email</div>
                        <div>Date / Time</div>
                        <div>Phone</div>
                        <div>Gender</div>
                    </div>

                    {/* EMPTY STATE */}
                    {admins.length === 0 && (
                        <div className="p-4 text-gray-500">No admins added yet</div>
                    )}

                    {/* ROWS */}
                    {admins.map((a, i) => (
                        <div
                            key={a.id}
                            className="grid grid-cols-6 gap-4 p-3 border-b text-sm items-center"
                        >
                            <div>{i + 1}</div>
                            <div className="truncate">{a.name}</div>
                            <div className="truncate">{a.email}</div>
                            <div>{a.createdAt}</div>
                            <div>{a.phone}</div>
                            <div>{a.gender}</div>
                        </div>
                    ))}
                </div>
            )}


            {/* ADD ADMIN LOGIN */}
            {mode === "add" && (
                <div className="border-2 border-gray-300 rounded p-4 space-y-3 w-80">
                    <p className="text-xl font-bold mb-3">Let's Verify</p>
                    <input
                        placeholder="Username"
                        className="border border-gray-300 p-2 w-full rounded"
                        value={login.username}
                        onChange={(e) => setLogin({ ...login, username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 p-2 w-full rounded"
                        value={login.password}
                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                    />
                    <button
                        onClick={handleLoginSubmit}
                        className="bg-black text-white px-4 py-2 rounded w-full"
                    >
                        Verify
                    </button>
                </div>
            )}

            {/* MODAL */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-xl p-6 w-112.5 space-y-4"
                    >
                        <h2 className="text-lg font-semibold">Add New Admin</h2>

                        <input
                            placeholder="Admin Name"
                            className="border p-2 w-full rounded"
                            value={newAdmin.name}
                            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                        />
                        <input
                            placeholder="Email"
                            className="border p-2 w-full rounded"
                            value={newAdmin.email}
                            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                        />
                        <input
                            placeholder="Phone"
                            className="border p-2 w-full rounded"
                            value={newAdmin.phone}
                            onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })}
                        />
                        <select
                            className="border p-2 w-full rounded"
                            value={newAdmin.gender}
                            onChange={(e) => setNewAdmin({ ...newAdmin, gender: e.target.value })}
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        <input
                            placeholder="Default Password"
                            className="border p-2 w-full rounded"
                            value={newAdmin.defaultPassword}
                            onChange={(e) =>
                                setNewAdmin({ ...newAdmin, defaultPassword: e.target.value })
                            }
                        />

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                onClick={handleAddAdmin}
                                className="px-4 py-2 bg-black text-white rounded-xl"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 border rounded-xl"
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- SWITCH BUTTON ---------- */
function SwitchBtn({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer
        ${active ? "bg-white shadow text-gray-900" : "text-gray-500"}`}
        >
            {active && <Check size={14} />}
            {label}
        </button>
    );
}
