import "./styles.css";
import imgAssinatura from "./images/imgAssinatura.png";
function Assinatura() {
  return (
    <div className="assina__div">
      <div>
        <h5 className="assina__titulo">Assinatura Cãoselheiro</h5>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus?
        </article>
        <button className="bt">SAIBA MAIS</button>
      </div>
      <img src={imgAssinatura} alt="" className="assina__img" />
    </div>
  );
}
export default Assinatura;
