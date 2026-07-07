import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [status, setStatus] = useState("checando...");

  useEffect(() => {
    // Testa a conexão com o Firestore fazendo uma leitura simples.
    // Se as credenciais e as regras estiverem ok, isso resolve sem erro.
    getDocs(collection(db, "teste"))
      .then((snap) => {
        setStatus(`conectado ✅ (coleção "teste": ${snap.size} documento(s))`);
      })
      .catch((err) => {
        setStatus(`erro na conexão ❌ — ${err.code || err.message}`);
      });
  }, []);

  return (
    <div className="app">
      <h1>Painel de Concursos</h1>
      <p>React + Vite + Firebase</p>
      <div className="card">
        <strong>Status do Firebase:</strong>
        <p>{status}</p>
      </div>
      <p className="hint">
        Edite <code>src/App.jsx</code> para começar a construir.
      </p>
    </div>
  );
}

export default App;
