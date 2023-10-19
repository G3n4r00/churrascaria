import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss"

export default function Cabecalho(){


    const rotaAtual = useLocation();

    return(
        <header className="Cabecalho">
          <nav>
            <ul>
              <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link> </li>
              <li><Link to="/cardapio" className={rotaAtual.pathname == "/cardapio" ? "active" : ""}>Cardapio</Link> </li>
            </ul>
          </nav>
        </header>
    )
}