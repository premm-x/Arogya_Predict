import React, { useState, useMemo } from "react";
import DrawerWithSides from "@/components/DrawerWithSides";

const initialData = {
    firstName: "Amelia",
    lastName: "Harper",
    department: "UI/UX",
    position: "Designer",
    hiredDate: "2023-03-03",
    birthDate: "1980-05-03",
    phone: "(213) 555-4276",
    email: "ameliah@dx-email.com",
    username: "corp\\amelia.harper",
    status: "Salaried",
    supervisor: "Sam Adamson",
    country: "USA",
    city: "New York",
    state: "New York",
    address: "405 E 42nd St",
    zip: "90014",
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSeI-K0Z8vpJ311sJGCGdlDUEcdZQ2Bkung&s',
};

export default function HospitalProfile() {
    const [savedData, setSavedData] = useState(initialData);
    const [formData, setFormData] = useState(initialData);

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);

        setFormData(prev => ({
            ...prev,
            profileImage: previewUrl,
        }));
    }

    // detect changes
    const isDirty = useMemo(() => {
        return JSON.stringify(formData) !== JSON.stringify(savedData);
    }, [formData, savedData]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!isDirty) return;

        console.log("Saved data:", formData);

        // mark form as saved
        setSavedData(formData);
    }


    return (
        <div className="">

            <div className="flex relative">

                <div className="h-screen bg-gray-300/40 px-2 py-4 sticky top-0 rounded-xl rounded-tr-lg">
                    <DrawerWithSides />
                </div>

                <main className="p-4 pb-0 flex-1">
                    <div className="min-h-screen p-6">
                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto max-w-6xl space-y-6"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between bg-white px-6 py-4 rounded shadow-sm">
                                <h1 className="text-lg font-semibold">Hospital Profile</h1>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(savedData)}
                                        className="px-3 py-1 text-sm border rounded"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={!isDirty}
                                        className={`px-3 py-1 text-sm rounded text-white
                ${isDirty ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>

                            {/* Basic Info */}
                            <Section title="Basic Info">
                                <div className="flex items-center gap-6">
                                    <div className="relative w-20 h-20 border-3 border-gray-300 rounded-full">
                                        <img
                                            src={formData.profileImage}
                                            alt="Profile"
                                            className="w-full h-full rounded-full object-cover"
                                        />

                                        {/* Edit button */}
                                        <label className="absolute -bottom-0.5 -right-1.5 bg-white border rounded-full p-1 cursor-pointer shadow">
                                            ✎
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={handleImageChange}
                                            />
                                        </label>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Amelia Harper</p>
                                        <p className="text-sm text-gray-500">ID: 22</p>
                                    </div>
                                </div>


                                <Grid cols={2}>
                                    <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                                    <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                                </Grid>

                                <Grid cols={4}>
                                    <Input label="Department" name="department" value={formData.department} onChange={handleChange} />
                                    <Input label="Position" name="position" value={formData.position} onChange={handleChange} />
                                    <Input label="Hired Date" name="hiredDate" type="date" value={formData.hiredDate} onChange={handleChange} />
                                    <Input label="Birth Date" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} />
                                </Grid>
                            </Section>

                            {/* Bottom */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <Section title="Contacts">
                                    <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                                    <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
                                    <Input label="Domain Username" name="username" value={formData.username} onChange={handleChange} />
                                    <Input label="Status" name="status" value={formData.status} onChange={handleChange} />
                                    <Input label="Supervisor" name="supervisor" value={formData.supervisor} onChange={handleChange} />
                                </Section>

                                <Section title="Address">
                                    <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
                                    <Input label="City" name="city" value={formData.city} onChange={handleChange} />
                                    <Input label="State" name="state" value={formData.state} onChange={handleChange} />
                                    <Input label="Address" name="address" value={formData.address} onChange={handleChange} />
                                    <Input label="Zip Code" name="zip" value={formData.zip} onChange={handleChange} />
                                </Section>
                            </div>

                        </form>
                    </div>
                </main>

            </div>

            <div className="h-87.5 overflow-hidden flex items-end bg-red-800 rounded-t-2xl mt-5">
                <p className="text-[300px] font-bold leading-none">Profile</p>
            </div>

        </div>
    );
}

/* ---------- Reusable ---------- */

function Section({ title, children }) {
    return (
        <div className="bg-white rounded shadow-sm">
            <div className="border-b px-6 py-3 text-sm font-semibold">
                {title}
            </div>
            <div className="p-6 space-y-4">{children}</div>
        </div>
    );
}

function Grid({ cols, children }) {
    const colClass = cols === 4 ? "md:grid-cols-4" : "md:grid-cols-2";
    return <div className={`grid gap-4 ${colClass}`}>{children}</div>;
}

function Input({ label, name, value, onChange, type = "text" }) {
    return (
        <div>
            <label className="text-xs text-gray-500">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 w-full rounded bg-gray-100 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
