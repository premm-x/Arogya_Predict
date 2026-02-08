import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";


export default function ButtonModal({ choice, children }) {

    const renderContent = () => {
        switch (choice) {
            case "doctorForm":
                return <DoctorFormModal>{children}</DoctorFormModal>
            case "patienForm":
                return <PatientFormModal>{children}</PatientFormModal>
            case "singleInput":
                return <SingleInputWithButton>{children}</SingleInputWithButton>

            default:
                return <p>error</p>
        }
    }

    return (
        <div>
            {renderContent()}
        </div>
    )

}


function SingleInputWithButton({ children, userData }) {

    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (userData) {
            userData["message"] = message;
            console.log("data:", userData);
        }
        else console.log("message:", message);
    };

    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button variant="outline">{children}</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">

                <DialogHeader>
                    <DialogTitle>Enter your message</DialogTitle>
                    <DialogDescription>
                        This message will be optimaized by AI then sended to user.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="message" className="sr-only">
                            Message
                        </Label>

                        <Input
                            id="message"
                            placeholder="Enter the message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </DialogClose>
                </DialogFooter>

            </DialogContent>

        </Dialog>
    )
}


function DoctorFormModal({ children }) {

    const [doctor, setDoctor] = useState({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        department: "",
        experience: "",
        qualification: "",
        availability: "",
        consultationFee: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setDoctor(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        // basic validation
        if (!doctor.name || !doctor.email || !doctor.specialization) {
            alert("Name, Email, and Specialization are required")
            return
        }

        console.log("Doctor Data:", doctor)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{children}</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Add Doctor</DialogTitle>
                    <DialogDescription>
                        Enter complete doctor information
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Name</Label>
                        <Input name="name" value={doctor.name} onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input name="email" value={doctor.email} onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Phone</Label>
                        <Input name="phone" value={doctor.phone} onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Specialization</Label>
                        <Input
                            name="specialization"
                            value={doctor.specialization}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Department</Label>
                        <Input
                            name="department"
                            value={doctor.department}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Experience (years)</Label>
                        <Input
                            type="number"
                            name="experience"
                            value={doctor.experience}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Qualification</Label>
                        <Input
                            name="qualification"
                            value={doctor.qualification}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Consultation Fee</Label>
                        <Input
                            type="number"
                            name="consultationFee"
                            value={doctor.consultationFee}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-span-2">
                        <Label>Availability (e.g. Mon–Fri, 10am–5pm)</Label>
                        <Input
                            name="availability"
                            value={doctor.availability}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>

                    <DialogClose asChild>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


function PatientFormModal({ children }) {
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    bloodGroup: "",
    disease: "",
    admitStatus: "No",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPatient(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!patient.name || !patient.phone || !patient.age) {
      alert("Name, Phone, and Age are required")
      return
    }

    console.log("Patient Data:", patient)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Add Patient</DialogTitle>
          <DialogDescription>
            Enter complete patient information
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Name</Label>
            <Input name="name" value={patient.name} onChange={handleChange} />
          </div>

          <div>
            <Label>Email</Label>
            <Input name="email" value={patient.email} onChange={handleChange} />
          </div>

          <div>
            <Label>Phone</Label>
            <Input name="phone" value={patient.phone} onChange={handleChange} />
          </div>

          <div>
            <Label>Age</Label>
            <Input type="number" name="age" value={patient.age} onChange={handleChange} />
          </div>

          <div>
            <Label>Gender</Label>
            <Input name="gender" placeholder="Male / Female / Other" value={patient.gender} onChange={handleChange} />
          </div>

          <div>
            <Label>Blood Group</Label>
            <Input name="bloodGroup" value={patient.bloodGroup} onChange={handleChange} />
          </div>

          <div className="col-span-2">
            <Label>Address</Label>
            <Input name="address" value={patient.address} onChange={handleChange} />
          </div>

          <div className="col-span-2">
            <Label>Disease / Problem</Label>
            <Input name="disease" value={patient.disease} onChange={handleChange} />
          </div>

          <div>
            <Label>Admitted</Label>
            <select
              name="admitStatus"
              value={patient.admitStatus}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


