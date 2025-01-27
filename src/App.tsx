import Login from "./components/Login";
import LogOut from "./components/LogOut";

import "./App.scss";

function App() {
  return (
    <>
      <div className="header">
        <h1>Chats</h1>
        <LogOut />
      </div>
       <Login />
    </>
  );
}

export default App;
