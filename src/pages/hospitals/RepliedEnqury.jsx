

export default function RepliedEnqury({ users, formatDateLabel }) {

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