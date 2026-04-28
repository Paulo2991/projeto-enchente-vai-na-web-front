function VoluntarioItem({ voluntarios }){
  return (
    <>
            <p>{voluntarios.nome}</p>
            <p>{voluntarios.contato}</p>
            <p>{voluntarios.descricao}</p>
            <p>{voluntarios.recurso}</p>
            <p>{voluntarios.esta_disponivel == true ? "Sim" : "Não"}</p>
    </>
  );
}

export default VoluntarioItem;