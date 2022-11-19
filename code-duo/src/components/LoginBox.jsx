import LoginButton from './LoginButton'
import {useState, useEffect} from 'react';

const LoginBox = () => {
    const [clicked, setClicked] = useState(false);
    // const [Cicked, setClicked] = useState(false);

  return (
    <div className='p-8 bg-[#3F3F3F] rounded-3xl text-white w-80 '>
        <p className="text-3xl text-center mb-9"><b>Login</b></p>
        <p>Are you from a <b>company</b> or are you a solo <b>applicant</b>?</p>
        <div className=" ">
        
            <div className='grid grid-cols-2 grid-row-1 mt-4  '>
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className={clicked ? " mr-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md " : "mr-5 px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md" }
                    onClick={() => setClicked(true)}
                >Company</button>
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className={!clicked ? " px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md " : "px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md" }
                    onClick={() => setClicked(false)}
                >Applicant</button>
            </div>    
            <div className='mt-4 '>
                <LoginButton clicked={clicked} />
            </div>  
        </div>
    </div>
  )
}

export default LoginBox