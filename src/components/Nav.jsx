import {
  CirclePoundSterling,
  LayoutDashboard,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="min-w-screen bg-darker border border-b-tertiary flex flex-col justify-center py-8">
      <div className="text-tertiary font-outfit flex items-center text-3xl">
        <NavLink to="/" className="flex items-center ml-28 mr-auto">
          <CirclePoundSterling className="mx-3 items-left flex" />
          CashWise
        </NavLink>

        <div className="flex items-center ml-auto mr-36 space-x-10 text-lg">
          <NavLink to="/DashBoard" className="flex items-center" >
            <LayoutDashboard className="mx-2 items-left flex" />
            DashBoard
          </NavLink>
          <NavLink to="/Gastos" className="flex items-center">
            <DollarSign className="mx-2 items-left flex" />
            Gastos
          </NavLink>
          <NavLink to="/Relatorios" className="flex items-center">
            <TrendingUp className="mx-2 items-left flex" />
            Relatórios
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
