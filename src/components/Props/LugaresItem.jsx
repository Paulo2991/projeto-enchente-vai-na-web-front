function LugaresItem({lugares}){
    return (
      <>
        <h1>{lugares.nome}</h1>
        <img src={lugares.foto_url} alt={lugares.nome} />
        <p>{lugares.status == "Verde" ? "Fora De Perigo" : "Está Perigoso"}</p>
      </>
    );
}

export default LugaresItem;
