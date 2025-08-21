import Home from "./pages/Home";
import Nav from "./components/Nav";
import DashBoard from "./pages/DashBoard";
import Gastos from "./pages/Gastos";
import Relatorios from "./pages/Relatorios";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/relatorios" element={<Relatorios />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
