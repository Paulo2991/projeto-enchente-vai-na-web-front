import LugaresItem from "../../components/Props/LugaresItem";
import mostrarLugares from "../../service/ConsulmoApi";
import s from "./Lugares.module.scss";

function Lugares(){
  const {mostrarDados: lugares} = mostrarLugares("/lugar/disponivel");
   return (
     <>
       <section className={s.container}>
         <h2 className={s.titulo}>Lista De Lugares Disponiveis</h2>

         {lugares.length === 0 ? (
           <p>Nenhum lugar disponível no momento.</p>
         ) : (
           <div className={s.lugares}>
             {lugares.map((lugar) => (
               <div key={lugar.id} className={s.lugar}>
                 <LugaresItem lugares={lugar} />
               </div>
             ))}
           </div>
         )}
       </section>
     </>
   );                          
}

export default Lugares;