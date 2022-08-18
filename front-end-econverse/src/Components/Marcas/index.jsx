import "./styles.css";
import marcas1 from "./images/marcas1.png";
import marcas2 from "./images/marcas2.png";
import marcas3 from "./images/marcas3.png";

function Marcas() {
  return (
    <>
      <h6 className="marcas__texto">Principais marcas</h6>
      <div className="marcas">
        <figure>
          <img src={marcas1} alt="logo" className="logos" />
        </figure>
        <figure>
          <img src={marcas2} alt="logo" className="logos" />
        </figure>
        <figure>
          <img src={marcas3} alt="logo" className="logos" />
        </figure>
        <figure>
          <img src={marcas1} alt="logo" className="logos" />
        </figure>
        <figure>
          <img src={marcas2} alt="logo" className="logos" />
        </figure>
      </div>
    </>
  );
}
export default Marcas;
