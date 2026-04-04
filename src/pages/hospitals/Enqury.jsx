import DrawerWithSides from "@/components/DrawerWithSides";
import { useState, useMemo } from "react";
import RepliedEnqury from "./RepliedEnqury";


export default function Enqury() {

    return (
        <div className="p-4">

            <section className=" flex flex-col gap-4 ">

                {/* Top cards */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex items-center justify-center py-2 bg-violet-200/30 rounded-2xl">
                        <p className="text-[100px] font-bold leading-none">Enqury Message's</p>
                    </div>
                </div>

                <div className="flex items-center justify-center my-5">
                    <hr className="w-[90%] border-gray-300" />
                </div>

                {/* Main content */}
                <div className="flex-1 rounded-2xl h-115">
                    <MessageList />
                </div>

            </section>

        </div>
    )
}







/* ---------- DATE HELPERS ---------- */
const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

const formatDateLabel = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const time = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    if (isSameDay(date, today)) return `Today ${time}`;
    if (isSameDay(date, yesterday)) return `Yesterday ${time}`;

    return `${date.toLocaleDateString()} ${time}`;
};


/* ---------- DATA ---------- */
const initialUsers = [
    {
        id: 1,
        name: "Tony",
        email: "tony@gmail.com",
        phone: "9999999999",
        message: "I want to know more about your service pricing and timelines.",
        createdAt: "2026-02-09T14:30:00Z", // today
        reply: "",
        replyDraft: "",
        isReplied: false
    },
    {
        id: 2,
        name: "Amit",
        email: "amit@gmail.com",
        phone: "9999999998",
        message: "Please call me back regarding the demo request.",
        createdAt: "2024-12-01T12:30:00Z", // yesterday
        reply: "",
        replyDraft: "",
        isReplied: false
    },
    {
        id: 3,
        name: "Rahul",
        email: "rahul@gmail.com",
        phone: "9999999997",
        message: "I am facing an issue while logging into my account.",
        createdAt: "2024-12-01T10:30:00Z", // old
        reply: "",
        replyDraft: "",
        isReplied: false
    }
];

/* ---------- COMPONENT ---------- */
export function MessageList() {
    const [users, setUsers] = useState(initialUsers);
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState("all");
    const [customDate, setCustomDate] = useState("");
    const [repliedUsers, setRepliedUsers] = useState([]); // NEW

    /* ---------- FILTER + SORT ---------- */
    const filteredUsers = useMemo(() => {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        return users
            .filter((u) => {
                const d = new Date(u.createdAt);

                if (filter === "today") return isSameDay(d, today);
                if (filter === "yesterday") return isSameDay(d, yesterday);
                if (filter === "date" && customDate)
                    return isSameDay(d, new Date(customDate));

                return true;
            })
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            );
    }, [users, filter, customDate]);

    /* ---------- REPLY LOGIC ---------- */
    const handleReplyChange = (id, value) => {
        setUsers((prev) =>
            prev.map((u) =>
                u.id === id ? { ...u, replyDraft: value } : u
            )
        );
    };

    // const handleSendReply = (id) => {
    //     setUsers((prev) =>
    //         prev.map((u) =>
    //             u.id === id && u.replyDraft.trim()
    //                 ? { ...u, reply: u.replyDraft, isReplied: true }
    //                 : u
    //         )
    //     );
    // };



    const formatDateLabel = (date) => {
        return new Date(date).toLocaleDateString();
    };


    // ✅ SEND + MOVE + DELETE
    const handleSendReply = (id) => {
        setUsers((prevUsers) => {
            const userToMove = prevUsers.find((u) => u.id === id);
            if (!userToMove) return prevUsers;

            const updatedUser = {
                ...userToMove,
                isReplied: true,
                replyMessage: userToMove.replyDraft, // ✅ store reply
                repliedAt: new Date(),
            };

            setRepliedUsers((prev) => {
                const alreadyExists = prev.some((u) => u.id === id);
                if (alreadyExists) return prev;
                return [...prev, updatedUser];
            });

            return prevUsers.filter((u) => u.id !== id);
        });
    };

    return (
        <div className="p-6 relative">
            {/* FILTER */}
            <div className="flex gap-4 mb-4">
                <select
                    className="border p-2 rounded"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="date">Select Date</option>
                </select>

                {filter === "date" && (
                    <input
                        type="date"
                        className="border p-2 rounded"
                        value={customDate}
                        onChange={(e) => setCustomDate(e.target.value)}
                    />
                )}
            </div>


            <UserTable
                filteredUsers={filteredUsers}
                setUsers={setUsers}
                formatDateLabel={formatDateLabel}
                handleReplyChange={handleReplyChange}
                handleSendReply={handleSendReply}
                setSelected={setSelected}
            />

            <RepliedEnqury
                users={repliedUsers}
                formatDateLabel={formatDateLabel}
            />

            {selected && (
                <Modal data={selected} onClose={() => setSelected(null)} />
            )}
        </div>
    );
}

/* ---------- MODAL ---------- */
function Modal({ data, onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-200 p-8 rounded-xl"
            >
                <h2 className="text-xl font-semibold mb-4">Message Details</h2>

                <p><strong>Date:</strong> {formatDateLabel(data.createdAt)}</p>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>

                <p className="mt-4"><strong>Message:</strong></p>
                <p>{data.message}</p>

                <p className="mt-4"><strong>Reply:</strong></p>
                <p className="text-green-700">
                    {data.isReplied ? data.reply : "No reply sent yet"}
                </p>

                <div className="mt-6 text-right">
                    <button
                        onClick={onClose}
                        className="bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

//-----------------

export function UserTable({
    filteredUsers,
    setUsers,
    formatDateLabel,
    handleReplyChange,
    handleSendReply,
    setSelected,
}) {
    const [selectedIds, setSelectedIds] = useState([]);

    // Toggle single checkbox
    const toggleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id)
                ? prev.filter((i) => i !== id)
                : [...prev, id]
        );
    };

    // Select all
    const toggleSelectAll = () => {
        if (selectedIds.length === filteredUsers.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredUsers.map((u) => u.id));
        }
    };

    // Delete selected
    const handleDeleteSelected = () => {
        const updated = filteredUsers.filter(
            (u) => !selectedIds.includes(u.id)
        );

        setUsers(updated);
        setSelectedIds([]);
    };

    return (
        <div className=" rounded-xl  overflow-hidden">

            {/* TOP ACTION BAR */}
            <div className="flex justify-end items-center absolute top-2 right-10 p-4 border-b">

                <button
                    onClick={handleDeleteSelected}
                    disabled={selectedIds.length === 0}
                    className="bg-red-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                >
                    Delete Selected ({selectedIds.length})
                </button>
            </div>

            <table className="w-full text-sm text-left">

                {/* HEADER */}
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="p-3">
                            <input
                                type="checkbox"
                                checked={
                                    selectedIds.length === filteredUsers.length &&
                                    filteredUsers.length > 0
                                }
                                onChange={toggleSelectAll}
                            />
                        </th>
                        <th className="p-3">#</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Message</th>
                        <th className="p-3">Reply</th>
                        <th className="p-3">Action</th>
                        <th className="p-3">View</th>
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {filteredUsers.map((u, index) => (
                        <tr key={u.id} className="border-t align-top hover:bg-gray-50">

                            {/* CHECKBOX */}
                            <td className="p-3">
                                <input
                                    type="checkbox"
                                    checked={selectedIds.includes(u.id)}
                                    onChange={() => toggleSelect(u.id)}
                                />
                            </td>

                            <td className="p-3">{index + 1}</td>

                            <td className="p-3 text-gray-600">
                                {formatDateLabel(u.createdAt)}
                            </td>

                            <td className="p-3">
                                {u.isReplied ? (
                                    <span className="text-green-600 font-medium">
                                        Replied
                                    </span>
                                ) : (
                                    <span className="text-gray-400">
                                        Pending
                                    </span>
                                )}
                            </td>

                            <td className="p-3">{u.name}</td>
                            <td className="p-3">{u.email}</td>
                            <td className="p-3">{u.phone}</td>

                            <td className="p-3 max-w-xs">
                                <div className="border p-2 rounded max-h-20 overflow-y-auto">
                                    {u.message}
                                </div>
                            </td>

                            <td className="p-3">
                                <textarea
                                    disabled={u.isReplied}
                                    value={u.replyDraft}
                                    onChange={(e) =>
                                        handleReplyChange(u.id, e.target.value)
                                    }
                                    className="border p-2 w-full h-20 rounded resize-none disabled:bg-gray-100"
                                />
                            </td>

                            <td className="p-3">
                                <button
                                    disabled={u.isReplied}
                                    onClick={() => handleSendReply(u.id)}
                                    className="bg-green-600 text-white px-3 py-2 rounded disabled:bg-gray-400"
                                >
                                    Send
                                </button>
                            </td>

                            <td className="p-3">
                                <button
                                    onClick={() => setSelected(u)}
                                    className="text-blue-600 hover:underline"
                                >
                                    View
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}


//------------------

export function RepliedTable({ users, formatDateLabel }) {


    return (
        <div className="bg-white rounded-xl shadow overflow-hidden mt-8">

            <div className="p-4 border-b font-semibold">
                Replied Queries
            </div>

            <table className="w-full text-sm text-left">

                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="p-3">#</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Message</th>
                        <th className="p-3">Reply</th> 
                        <th className="p-3">Replied At</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u, index) => (
                        <tr key={u.id} className="border-t hover:bg-gray-50">

                            <td className="p-3">{index + 1}</td>

                            <td className="p-3">{u.name}</td>

                            <td className="p-3">{u.email}</td>

                            <td className="p-3">{u.phone}</td> {/* ✅ added */}

                            <td className="p-3 max-w-xs">
                                <div className="border p-2 rounded max-h-20 overflow-y-auto">
                                    {u.message}
                                </div>
                            </td>

                            <td className="p-3 max-w-xs"> {/* ✅ reply message */}
                                <div className="border p-2 rounded max-h-20 overflow-y-auto bg-green-50">
                                    {u.replyMessage || "—"}
                                </div>
                            </td>

                            <td className="p-3 text-gray-600">
                                {formatDateLabel(u.repliedAt)}
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}