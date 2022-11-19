import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [companyName, setCompanyName] = useState("");

    const navigate = useNavigate();

    const submit = async () => {
        const reqOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
                role: "Company",
                name: companyName,
            }),
        };

        const res = await fetch("/api/users", reqOptions);
        const data = await res.json();
        navigate("/company");
    };

    return (
        <div className="p-8 bg-[#3F3F3F] rounded-3xl w-80 ">
            <label>Email: </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Company name: </label>
            <input
                type="text"
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
            />
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm password</label>
            <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default CompanyForm;
