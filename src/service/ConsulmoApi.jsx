import { useEffect, useState } from "react";
import Api from "./Api";

function ConsulmoApi(url){
  const [mostrarDados, setMostrarDados] = useState([]);
  useEffect(() => {
    async function mostrarDados() {
      try {
        const mostrarDados = await Api().get(url);
        setMostrarDados(mostrarDados.data);
      } catch (error) {
        console.log("Erro ao carregar dados", error);
      }
    }
    mostrarDados();
  }, [url]);
  return {mostrarDados}
}

export default ConsulmoApi;