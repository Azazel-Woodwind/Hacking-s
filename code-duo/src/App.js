import "./App.css";
// import Profile from './components/Profile'
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
function App() {
    return (
        <div className="   ">
            <head>
                <title>Name_of_Project</title>
            </head>

            <span className="h-12 border border-ruby-400 flex flex-row">
                <LoginButton />
            </span>

            <Profile />
            <span>
                <LogoutButton />
            </span>

            {/* <Profile></Profile> */}
        </div>
    );
}

export default App;
