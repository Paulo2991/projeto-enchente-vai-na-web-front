import mostrarVoluntario from "../../service/ConsulmoApi";
import s from "./Voluntarios.module.scss";
import ListagemVoluntarios from "../../components/Props/ListagemVoluntarios";

function Voluntario(){
 const {mostrarDados: voluntarios} = mostrarVoluntario("/voluntario/disponivel");

 return (
   <>
     <section className={s.main}>
       <h2 className={s.titulo}>Lista De Voluntarios Disponiveis</h2>
        <ListagemVoluntarios voluntarios={voluntarios} />
     </section>
   </>
 );                           

}

export default Voluntario;