import React, { useState } from "react";
import axios from "axios";
import './HistoricoConsumo.css';


const HistoricoConsumo = () => {
  const [usuarioId, setUsuarioId] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [historico, setHistorico] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:3001/consumo/historico", {
        params: { usuarioId, dataInicial, dataFinal },
      });
      setHistorico(response.data);
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
      alert("Erro ao buscar histórico.");
    }
  };

  return (
    <div>
      <h2>Histórico de Consumo</h2>
      <label>
        Código do Usuário:
        <input
          type="text"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          required
        />
      </label>
      <label>
        Data Inicial:
        <input
          type="date"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
        />
      </label>
      <label>
        Data Final:
        <input
          type="date"
          value={dataFinal}
          onChange={(e) => setDataFinal(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {historico.map((registro, index) => (
          <li key={index}>
            {registro.dataLeitura}: {registro.quantidade} m³
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoConsumo;