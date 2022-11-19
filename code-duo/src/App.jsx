import "./App.css";
import LoginBox from "./components/LoginBox";

function App() {
    return (
        <div className="w-screen h-screen bg-gradient-to-r from-[#EFB5A2] to-[#EE7AA0]">
            <div className="flex items-center justify-center h-screen">
                <LoginBox />
            </div>
        </div>
    );
}

export default App;
