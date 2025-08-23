import React from "react";
import graphImg from "../assets/Graph.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="central">
      <div className="min-h-screen flex flex-col items-center justify-center text-tertiary font-outfit text-center">
        <h1 className="text-6xl md:text-6xl py-6 font-bold">
          Bem-vindo ao CashWise!
        </h1>
        <p className="font-inter text-xl md:text-2xl">
          Controle seus gastos, economize com inteligência
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-black">
        <div className="flex flex-col w-1/2 text-center md:text-left p-10">
          <h1 className="font-outfit text-4xl font-bold text-white">
            Dashboard: Controle Total das Suas Finanças
          </h1>
          <p className="font-inter text-tertiary mt-2">
            Visualize seu resumo financeiro em tempo real, acompanhe gastos,
            saldo e tendências, e tome decisões inteligentes para economizar.
          </p>
          <NavLink
            to="/DashBoard"
            className="bg-tertiary hover:bg-secondary text-dark px-4 py-2 rounded-md mt-4 text-center font-inter text-lg font-bold"
          >
            Ver DashBoard
          </NavLink>
        </div>

        <div className="relative w-full md:w-1/2 min-h-[300px]">
          <img
            src={graphImg}
            alt="Gráfico"
            className="w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
