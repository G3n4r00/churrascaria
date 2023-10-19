import { ListaProduto } from "../../components/ListaLanches";
import style from "./Cardapio.modules.css";

export default function Cardapio() {
  document.title = "Lista de Produtos";

  const ListaProdutos = ListaProduto

  return (
    <div>
      <h1>Cardapio</h1>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>FOTO</th>
            <th>PREÇO</th>
            <th>INGREDIENTES</th>
          </tr>
        </thead>

        <tbody>
          {ListaProdutos.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.imagem}</td>
              <td>{item.preco}</td>
              <td>{item.ingredientes}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              LANCHES - QTD = {ListaProduto.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}