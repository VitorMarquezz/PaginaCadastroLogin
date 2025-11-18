import { useState } from "react";
import "./StyleRegistro.css";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";

function Registro() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const iconHome = '../../assets/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
  const navigate = useNavigate()

  async function registrar(e) {
    e.preventDefault();

    try {
      const resposta = await api.post("/api/registro", {
      nome,
      email,
      password,
    });

    navigate('/')
    } catch (error) {
      console.log(error)
    }
    

    
  }

  return (
    <div className="body-reg">
      <div className="container-reg">
        <form className="formulario-reg" onSubmit={registrar}>
          <h2>Voando juntos é mais divertido.</h2>
          <p className="descricao">Junte-se a nós hoje</p>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button disabled={!email} className="enviar">
            Enviar
          </button>
          <div className="separator">ou</div>
          <Link to={"/"}><img src={iconHome} alt="Descrição da Imagem" /></Link>
        </form>
      </div>
    </div>
  );
}

export default Registro;
