import './App.css';
// import Profile from './components/Profile'
function App() {
  return (
    <div className='   '>
      <head>
        <title>
          Name_of_Project
        </title>
      </head>

      <span className='h-12 border border-ruby-400 flex flex-row'>
        <a href="/api/auth/login">Login</a>
      </span>
      <span>
        <a href="/api/auth/logout">Logout</a>
      </span>


      <p className="underline decoration-sky-500"><code> This is a great piece of text</code></p>
      {/* <Profile></Profile> */}
    </div>
  );
}

export default App;
