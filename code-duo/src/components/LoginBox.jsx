import {useState, useEffect} from 'react';
import Applicant from '../pages/Applicant';
import Company from '../pages/Company';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const LoginBox = () => {
  return (
    <Router>
        <div className='p-8 bg-[#3F3F3F] rounded-3xl text-white w-80 '>
            <p className="text-3xl text-center mb-9"><b>Login</b></p>
            <p>Are you from a <b>company</b> or are you a solo <b>applicant</b>?</p>
            <div className=" ">
                
                <div className='grid grid-cols-2 grid-row-1 mt-4  '>
                    <Link to="/company">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className={ "mr-5 px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md" }
            
                        >Company</button>
                    </Link>
                    <Link to="/applicant">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className={ "mr-5 px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md" }
                        >Applicant</button>
                    </Link>
                    
                </div>    

            </div>

            <Switch>
                <Route path="/company">
                    <Applicant />
                </Route>
                <Route path="/applicant">
                    <Company />
                </Route>
            </Switch>
        </div>
    </Router>
    
  )
}

export default LoginBox