import { useState } from "react";
import LugaresItem from "../Props/LugaresItem";
import VoluntarioItem from "../Props/VoluntarioItem";
import { useLocation } from "react-router-dom";
import s from "./AdicionarServicos.module.scss"

function AdicionarServicos({ listagem }) {
  const [escolherServicos, setEscolherServicos] = useState([]);
  const [mostrarServicosEscolhidos, setMostrarServicosEscolhidos] =
    useState("");
  const location = useLocation();

  function selecionarServicos(servico, index) {
    setEscolherServicos((servicoAnterior) => {
      if (servicoAnterior.some((v) => v.index === index)) {
        setMostrarServicosEscolhidos(
          `${servico.nome} já escolhido anteriormente!`,
        );

        setTimeout(() => {
          setMostrarServicosEscolhidos("");
        }, 3000);
        return servicoAnterior;
      }
      setMostrarServicosEscolhidos(`${servico.nome} escolhido com sucesso!`);
      setTimeout(() => {
        setMostrarServicosEscolhidos("");
      }, 3000);
      return [...escolherServicos, { ...servico, index }];
    });
  }


  return (
    <>
      {listagem.length === 0 ? (
        <p>Nenhum serviço disponível no momento.</p>
      ) : (
        <div className={s.servicos}>
          <div className={s.mensagemServicoSucesso}>
            {mostrarServicosEscolhidos && (
              <div>{mostrarServicosEscolhidos}</div>
            )}
          </div>

          {listagem.map((servico, index) => (
            <div key={index} className={s.servico}>
              {location.pathname === "/voluntarios" ? (
                <VoluntarioItem listagem={servico} />
              ) : (
                <LugaresItem listagem={servico} />
              )}
              <button
                className={s.escolherServico}
                onClick={() => selecionarServicos(servico, index)}
              >
                {location.pathname === "/voluntarios" ? "Escolher Voluntario" : "Escolher Lugar"}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AdicionarServicos;