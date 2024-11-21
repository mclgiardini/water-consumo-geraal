import React, { useState } from "react";
import axios from "axios";
import './AlertasConsumo.css';


const AlertasConsumo = () => {
  const [usuarioId, setUsuarioId] = useState("");
  const [alertas, setAlertas] = useState([]);

  const handleCheck = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/consumo/alertas/${usuarioId}`);
      setAlertas(response.data);
    } catch (error) {
      console.error("Erro ao buscar alertas:", error);
      alert("Erro ao buscar alertas.");
    }
  };

  return (
    <div>
      <h2>Alertas de Consumo Elevado</h2>
      <label>
        Código do Usuário:
        <input
          type="text"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          required
        />
      </label>
      <button onClick={handleCheck}>Verificar</button>
      <ul>
        {alertas.map((alerta, index) => (
          <li key={index}>{alerta.mensagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlertasConsumo;