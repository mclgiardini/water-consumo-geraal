import React, { useState } from "react";
import axios from "axios";
import './CadastroConsumo.css';


const CadastroConsumo = () => {
  const [usuarioId, setUsuarioId] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [dataLeitura, setDataLeitura] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/consumo", {
        usuarioId,
        quantidade: parseFloat(quantidade),
        dataLeitura,
      });
      alert("Consumo registrado com sucesso!");
      setUsuarioId("");
      setQuantidade("");
      setDataLeitura("");
    } catch (error) {
      console.error("Erro ao registrar consumo:", error);
      alert("Erro ao registrar consumo.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Consumo de Água</h2>
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
        Quantidade Consumida (m³):
        <input
          type="number"
          step="0.01"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        />
      </label>
      <label>
        Data do Consumo:
        <input
          type="date"
          value={dataLeitura}
          onChange={(e) => setDataLeitura(e.target.value)}
          required
        />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default CadastroConsumo;