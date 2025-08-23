import { useState } from "react";
import {
  CirclePoundSterling,
  LayoutDashboard,
  DollarSign,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-darker border-b border-tertiary">
      <div className="flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center text-tertiary font-outfit text-2xl">
          <CirclePoundSterling className="mx-2" />
          CashWise
        </NavLink>

        <div className="hidden md:flex items-center space-x-10 text-lg text-tertiary font-outfit">
          <NavLink to="/DashBoard" className="flex items-center">
            <LayoutDashboard className="mx-2" />
            DashBoard
          </NavLink>
          <NavLink to="/Gastos" className="flex items-center">
            <DollarSign className="mx-2" />
            Gastos
          </NavLink>
          <NavLink to="/Relatorios" className="flex items-center">
            <TrendingUp className="mx-2" />
            Relatórios
          </NavLink>
        </div>

        <button
          className="md:hidden text-tertiary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 space-y-4 text-tertiary font-outfit text-lg bg-darker border-t border-tertiary">
          <NavLink to="/DashBoard" className="flex items-center" onClick={() => setOpen(false)}>
            <LayoutDashboard className="mx-2" />
            DashBoard
          </NavLink>
          <NavLink to="/Gastos" className="flex items-center" onClick={() => setOpen(false)}>
            <DollarSign className="mx-2" />
            Gastos
          </NavLink>
          <NavLink to="/Relatorios" className="flex items-center" onClick={() => setOpen(false)}>
            <TrendingUp className="mx-2" />
            Relatórios
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
