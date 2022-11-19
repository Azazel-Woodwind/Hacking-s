import './App.css';
// import Profile from './components/Profile'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import LoginBox from './components/LoginBox';
function App() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-[#EFB5A2] to-[#EE7AA0]'>
      {/* <div className=''>
        
      </div> */}

      <div className="flex items-center justify-center h-screen">
        <LoginBox ></LoginBox>
      </div>
    </div>

  );
}

export default App;
