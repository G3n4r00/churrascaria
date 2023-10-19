import { useEffect, useState } from "react";

export default function Produtos() {
  // Registra a renderização do componente no console
  console.log("Componente Produtos renderizado");

  // Define o título da página
  document.title = "Lista de Produtos";

  // Define o estado local para armazenar a lista de produtos
  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);


  useEffect(() => {
    // Carrega os produtos da fonte de dados (ListaProdutos) quando o componente é montado
    setListaProdutosLocal(ListaLanches);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>INGREDIENTES</th>
            <th>PREÇO</th>
          </tr>
        </thead>

        <tbody>
          {listaProdutosLocal.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.foto}</td>
              <td>{item.nome}</td>
              <td>{item.ing}</td>
              <td>{item.preco}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              LANCHES - QTD = {listaProdutosLocal.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
