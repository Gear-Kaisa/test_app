import { useState } from "react";
import "./App.css";
import HeaderBar from "./components/Headerbar";
import SideBar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar";
import "bootstrap/dist/css/bootstrap.min.css";
import Salle from "./components/Salle";
import Classe from "./components/Classe";
import Professeur from "./components/Professeur";
import Module from "./components/Module";
import Categorie from "./components/Categorie";
import Dashboard from "./components/Dashboard";
import ProfileSettings from "./components/ProfileSettings";
import { useStateContext } from "./contexts/ContextProvider";
import CardSettings from "./components/CardSettings";
import Login from "./components/login";
import { FlashOnRounded } from "@mui/icons-material";
import Test from "./components/Test";

function App() {
  const [isloged, setIsloged] = useState(true);
  return (
    <>
      {isloged ? (
        <div style={{ height: "100vh", display: "flex" }}>
          <SideBar></SideBar>
          <div className="layout">
            <CardSettings></CardSettings>
            <HeaderBar />
            <div
              style={{
                height: "calc(100% - 80px) ",
                width: "calc(100% - 120px)",
                alignItems: "center",
                margin: "80px 60px",
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/Dashboard" />} />
                <Route path="*" element={<Navigate to="/Dashboard" />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/Salle" element={<Salle />} />
                <Route path="/Classe" element={<Classe />} />
                <Route path="/Professeur" element={<Professeur />} />
                <Route path="/Module" element={<Module />} />
                <Route path="/Categorie" element={<Categorie />} />
                <Route path="/Settings" element={<ProfileSettings />} />
                <Route path="/test" element={<Test />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "100vh",width:'100%' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="*" element={<Navigate to="/Login" />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
