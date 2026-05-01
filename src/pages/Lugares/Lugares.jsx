import AdicionarServicos from "../../components/AdicionarServicos/AdicionarServicos";
import mostrarLugares from "../../service/ConsulmoApi";
import s from "./Lugares.module.scss";

function Lugares(){
  const {mostrarDados: lugares} = mostrarLugares("/lugar/disponivel");
   return (
     <>
       <section className={s.container}>
         <h2 className={s.titulo}>Lista De Lugares Disponiveis</h2>
         <AdicionarServicos listagem={lugares}/>
       </section>
     </>
   );                          
}

export default Lugares;