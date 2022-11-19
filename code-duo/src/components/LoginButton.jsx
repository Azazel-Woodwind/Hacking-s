import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({clicked}) => {
  const { loginWithRedirect } = useAuth0();
  console.log(clicked);

  return (
    <div className="text-center">
      <button onClick={() => loginWithRedirect()} 
      className=' px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"'
      >
        Log In</button>
    </div>
  )
};

export default LoginButton;
