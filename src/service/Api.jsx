import axios from "axios";

function Api(){
  const dados = axios.create({
   baseURL: "http://localhost:3000"
 });
 return dados;  
                            
}

export default Api;