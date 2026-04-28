import VoluntarioItem from "./VoluntarioItem";
import s from "../../pages/Voluntarios/Voluntarios.module.scss";
import { useState } from "react";

function ListagemVoluntarios( { voluntarios }) {
   const [escolherVoluntario, setEscolherVoluntario] = useState([]);
   const [mostrarVoluntariosEscolhidos, setMostrarVoluntariosEscolhidos] = useState("");
    
    function selecionarVoluntario(voluntario,index){
       setEscolherVoluntario((voluntarioAnterior) => {
         if (voluntarioAnterior.some((v) => v.index === index)) {
           setMostrarVoluntariosEscolhidos(
             `${voluntario.nome} já escolhido anteriormente!`,
           );
           setTimeout(() => {
             setMostrarVoluntariosEscolhidos("");
           }, 3000);
           return voluntarioAnterior;
         }
         setMostrarVoluntariosEscolhidos(
           `${voluntario.nome} escolhido com sucesso!`,
         );
         setTimeout(() => {
           setMostrarVoluntariosEscolhidos("");
         }, 3000);
          return [...escolherVoluntario, {...voluntario,index}];
       });  

    }                         
   return (
     <>
       {voluntarios.length === 0 ? (
         <p>Nenhum voluntário disponível no momento.</p>
       ) : (
         <div className={s.voluntarios}>
           <div className={s.mensagemVoluntarioSucesso}>
             {mostrarVoluntariosEscolhidos && (
               <div>{mostrarVoluntariosEscolhidos}</div>
             )}
           </div>

           {voluntarios.map((voluntario, index) => (
             <div key={index} className={s.voluntario}>
               <VoluntarioItem voluntarios={voluntario} />
               <button
                 className={s.escolherVoluntario}
                 onClick={() => selecionarVoluntario(voluntario, index)}
               >
                 Escolher Voluntario
               </button>
             </div>
           ))}
         </div>
       )}
     </>
   );
}

export default ListagemVoluntarios;