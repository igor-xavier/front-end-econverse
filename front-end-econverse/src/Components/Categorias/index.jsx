import "./styles.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
function Categorias() {
  return (
    <div className="categorias">
      <h6 className="titulo">Categorias</h6>
      <div className="categorias__imgs">
        <label className="molde">
          <img src={img1} alt="cachorro com bola" />
          Brinquedos
        </label>
        <label className="molde">
          <img src={img2} alt="cachorro comendo" />
          Petiscos
        </label>
        <label className="molde">
          <img src={img3} alt="cachorro com guia" />
          Guias
        </label>
        <label className="molde">
          <img src={img4} alt="cachorro tomando banho" />
          Higiene
        </label>
      </div>
    </div>
  );
}
export default Categorias;
