import "./styles.css";

function ProductsList({ produtos, Vitrine }) {
  return (
    <>
      <div className="categorias__top">
        <h2>Meu cachorro...</h2>
        <nav className="categorias__nav">
          <button className="bt__filtro">É AGITADO</button>
          <button className="bt__filtro">MORDE</button>
          <button className="bt__filtro">LATE MUITO</button>
          <button className="bt__filtro">É ANSIOSO</button>
          <button className="bt__filtro">É ESTRESSADO</button>
        </nav>
      </div>
      <div>
        <ul className="vitrine">
          {produtos.map((result, index) => {
            return (
              <li>
                <Vitrine
                  id={index}
                  nome={result.productName}
                  descricao={result.descriptionShort}
                  preco={result.price}
                  imagem={result.photo}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default ProductsList;
