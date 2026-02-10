import DrawerWithSides from "@/components/DrawerWithSides";
import { useState, useMemo } from "react";


export default function Enqury() {

    return (
        <div className="">

            <section className=" flex flex-col gap-4 ">

                {/* Top cards */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex items-center justify-center py-2 bg-violet-200/30 rounded-2xl">
                        <p className="text-[160px] font-bold leading-none">Enqury Message's</p>
                    </div>
                </div>

                <div className="flex items-center justify-center my-5">
                    <hr class="w-[90%] border-gray-300" />
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

    const handleSendReply = (id) => {
        setUsers((prev) =>
            prev.map((u) =>
                u.id === id && u.replyDraft.trim()
                    ? { ...u, reply: u.replyDraft, isReplied: true }
                    : u
            )
        );
    };

    return (
        <div className="p-6">
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

            {/* HEADER */}
            <div className="grid grid-cols-10 gap-4 font-semibold border-b pb-2">
                <div>Date</div>
                <div>Status</div>
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div className="col-span-2">Message</div>
                <div>Reply</div>
                <div></div>
                <div>View</div>
            </div>

            {/* LIST */}
            {filteredUsers.map((u) => (
                <div
                    key={u.id}
                    className="grid grid-cols-10 gap-4 py-4 border-b items-start"
                >
                    <div className="text-sm text-gray-600">
                        {formatDateLabel(u.createdAt)}
                    </div>

                    <div>
                        {u.isReplied ? (
                            <span className="text-green-600 text-sm">Replied</span>
                        ) : (
                            <span className="text-gray-400 text-sm">Pending</span>
                        )}
                    </div>

                    <div>{u.name}</div>
                    <div>{u.email}</div>
                    <div>{u.phone}</div>

                    <div className="col-span-2">
                        <div className="border p-2 max-h-20 overflow-y-auto text-sm">
                            {u.message}
                        </div>
                    </div>

                    <textarea
                        disabled={u.isReplied}
                        value={u.replyDraft}
                        onChange={(e) => handleReplyChange(u.id, e.target.value)}
                        className="border p-2 h-20 resize-none disabled:bg-gray-100"
                    />

                    <button
                        disabled={u.isReplied}
                        onClick={() => handleSendReply(u.id)}
                        className="bg-green-600 text-white px-3 py-2 rounded disabled:bg-gray-400"
                    >
                        Send
                    </button>

                    <button
                        onClick={() => setSelected(u)}
                        className="text-blue-600 underline"
                    >
                        View
                    </button>
                </div>
            ))}

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

