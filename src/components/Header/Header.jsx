import { Link } from "react-router-dom";
import s from "./Header.module.scss";

function Header(){
    return (
      <>
        <header className={s.header}>
          <Link to="/" className={s.logo}>Portal Social</Link>
          <nav className={s.nav}>
            <Link to="/voluntarios" className={s.voluntarios}>Voluntarios</Link>
            <Link to="/lugares" className={s.lugares}>Lugares</Link>
          </nav>
        </header>
      </>
    );                        
}

export default Header;