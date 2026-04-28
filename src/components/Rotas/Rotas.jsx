import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Header from "../Header/Header";
import Voluntarios from "../../pages/Voluntarios/Voluntarios";
import Lugares from "../../pages/Lugares/Lugares";

function Rotas(){
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntarios" element={<Voluntarios />} />
          <Route path="/lugares" element={<Lugares />} />
        </Routes>
      </BrowserRouter>
    </>
  );                         
}

export default Rotas;