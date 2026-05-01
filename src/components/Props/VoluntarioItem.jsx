function VoluntarioItem({ listagem }){
  return (
    <>
            <p>{listagem.nome}</p>
            <p>{listagem.contato}</p>
            <p>{listagem.descricao}</p>
            <p>{listagem.recurso}</p>
            <p>{listagem.esta_disponivel == true ? "Sim" : "Não"}</p>
    </>
  );
}

export default VoluntarioItem;