import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplicantForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    const submit = async () => {
        const reqOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
                role: "Applicant",
            }),
        };

        const res = await fetch("/api/users", reqOptions);
        const data = await res.json();
        navigate("/applicant");
    };

    return (
        <div className="p-8 bg-[#3F3F3F] rounded-3xl w-80 text-center text-white">
            <p className="text-2xl "><b>Create Account</b></p>
            <input className="p-2 mt-3 rounded-lg bg-[#222222]"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                className="p-2 mt-3 rounded-lg bg-[#222222]"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="p-2 mt-3 rounded-lg bg-[#222222]"
                placeholder="Confirm Password"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button className='mt-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'
            onClick={submit}>Submit</button>
        </div>
    );
};

export default ApplicantForm;
