import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/hospitals/Dashboard"
import DoctorPage from "./pages/hospitals/doctor/DoctorPage"
import PatientPage from "./pages/hospitals/patient/PatientPage"
import AdminPage from "./pages/hospitals/admin/AdminPage"
import NotFound from "./pages/NotFound"
import Equipt from "./pages/hospitals/equiptment/equipt"
import HospitalProfile from "./pages/hospitals/HospitalProfile"
import AdminProfile from "./pages/hospitals/admin/AdminProfile"
import Appointment from "./pages/hospitals/Appointment"
import Enqury from "./pages/hospitals/Enqury"
import Test from "./components/testing/test"
import Sidebar from "./components/Sidebar"


export default function App() {

    return (
        <div className="">


            <Routes>
                <Route element={<Sidebar />} >
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/doctor" element={<DoctorPage />} />
                    <Route path="/patient" element={<PatientPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/equipt" element={<Equipt />} />

                    <Route path="/admin/profile" element={<AdminProfile />} />
                    <Route path="/hospital/profile" element={<HospitalProfile />} />

                    <Route path="/appointments" element={<Appointment />} />
                    <Route path="/enqury" element={<Enqury />} />

                    <Route path="/testing" element={<Test />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    )
}