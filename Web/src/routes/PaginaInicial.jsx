import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useState, useEffect } from "react";

function PaginaInicial() {
const [userName, setUserName] = useState('')

  const navigate = useNavigate();

  async function validarUsuario() {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("faça login para acessar a pagina");
      navigate("/");
      return;
    }
    try{
    const response = await api.get("/api/login", {
      
    });
    console.log(response.data)

    if (response.data && response.data.name) {
        setUserName(response.data.nome);
      } else {
        setUserName("Usuário");
      }
    }catch(error){
      console.error("Erro na validação do usuário:", error);
    if (error.response && (error.response.status === 401 || error.response.status === 400)) {
       alert("Sessão expirada ou acesso negado. Faça login novamente.");
      } else {
        alert("Ocorreu um erro inesperado. Por favor, tente novamente.");
      }
      localStorage.removeItem("token");
    navigate("/"); 
      
    } 
  
  }
  validarUsuario()
  return (
    <div>
      <h2>Login feito com sucesso</h2>
    </div>
  );
}

export default PaginaInicial;
