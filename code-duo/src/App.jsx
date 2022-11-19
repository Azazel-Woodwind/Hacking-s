import './App.css';
// import Profile from './components/Profile'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import LoginBox from './components/LoginBox';
import Main from './components/Main';
import {BrowserRouter as Router,
Switch,
Route,
Link} from 'react-router-dom';

function App() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-[#EFB5A2] to-[#EE7AA0]'>
      {/* <div className=''>
        
      </div> */}
      <Main/>
      <div className="flex items-center justify-center h-screen">
        <LoginBox></LoginBox>
      </div>
    </div>

  );
}

export default App;
