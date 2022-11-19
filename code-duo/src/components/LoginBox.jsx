import { useState, useEffect } from "react";
import CompanyForm from "../pages/CompanyForm";
import ApplicantForm from "../pages/ApplicantForm";

const LoginBox = () => {
    const [companyClicked, setCompanyClicked] = useState(true);
    const [optionSelected, setOptionSelected] = useState(false);

    if (!optionSelected) {
        return (
            <div className="p-8 bg-[#3F3F3F] rounded-3xl text-white w-80 ">
                <p className="text-3xl text-center mb-9">
                    <b>Login</b>
                </p>
                <p>
                    Are you from a <b>company</b> or are you a solo{" "}
                    <b>applicant</b>?
                </p>
                <div className="grid grid-cols-2 grid-row-1 mt-4  ">
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className={
                            companyClicked
                                ? "mr-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                                : "mr-5 px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                        }
                        onClick={() => setCompanyClicked(true)}
                    >
                        Company
                    </button>
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className={
                            !companyClicked
                                ? "mr-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                                : "mr-5 px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                        }
                        onClick={() => setCompanyClicked(false)}
                    >
                        Applicant
                    </button>
                </div>
                <div className="text-center mt-3">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className={
                        "mr-5 px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                    }
                    onClick={() => setOptionSelected(true)}
                >
                    Ok
                </button>
                </div>
            </div>
        );
    } else {
        return companyClicked ? <CompanyForm /> : <ApplicantForm />;
    }
};

export default LoginBox;
