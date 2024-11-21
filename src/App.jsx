import React from "react";
import CadastroConsumo from "./components/CadastroConsumo";
import HistoricoConsumo from "./components/HistoricoConsumo";
import AlertasConsumo from "./components/AlertasConsumo";
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Monitoramento de Consumo de Água</h1>
      <CadastroConsumo />
      <HistoricoConsumo />
      <AlertasConsumo />
    </div>
  );
};

export default App;