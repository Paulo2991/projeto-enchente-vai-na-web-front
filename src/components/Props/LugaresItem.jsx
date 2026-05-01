function LugaresItem({listagem}){
    return (
      <>
        <h1>{listagem.nome}</h1>
        <img src={listagem.foto_url} alt={listagem.nome} />
        <p>{listagem.status == "Verde" ? "Fora De Perigo" : "Está Perigoso"}</p>
      </>
    );
}

export default LugaresItem;
