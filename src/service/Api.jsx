import axios from "axios";

function Api(){
  const dados = axios.create({
    baseURL: "https://projeto-enchete-vai-na-web-back.onrender.com/",
  });
 return dados;  
                            
}

export default Api;