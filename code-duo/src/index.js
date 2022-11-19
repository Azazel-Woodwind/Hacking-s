import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applicant from "./pages/Applicant";
import Company from "./pages/Company";
import LoginBox from "./components/LoginBox";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<LoginBox />} />
                <Route path="applicant" element={<Applicant />} />
                <Route path="company" element={<Company />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
