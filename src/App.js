import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Admin from "./component/Admin";
import Login from "./component/Login";
import Deney from "./component/Deney";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/user/getAll" element={<Deney />} />
      </Routes>
    </>
  );
}

export default App;
