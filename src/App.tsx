import Login from "./components/Login";
import LogOut from "./components/LogOut";
import { useEffect, useState } from "react";
import "./App.scss";

interface LoginProps {
  idInstance: number | string;
  apiTokenInstance: string;
}

function App() {
  const [regData, setRegData] = useState<LoginProps>({
    idInstance: 0,
    apiTokenInstance: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("regData");
    if (data) {
      try {
        const newData = JSON.parse(data);
        setRegData(newData);
      } catch (error) {
        console.error("Ошибка при парсинге данных из localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Текущее состояние regData:", regData);
  }, [regData]);

  return (
    <>
      <div className="header">
        <h1>Chats</h1>
        <LogOut  onSave={setRegData} regData={regData}/>
      </div>
      {!regData.idInstance && <Login onSave={setRegData}/>}
    </>
  );
}

export default App;
