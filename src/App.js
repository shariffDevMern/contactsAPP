import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default App;
