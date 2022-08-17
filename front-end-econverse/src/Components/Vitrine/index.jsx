import "./styles.css";
import img1 from "./images/img1.png";
import { AiFillHeart } from "react-icons/ai";

function Vitrine({ nome, descricao, preco, imagem }) {
  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `url(${img1})`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <label className="card__top">
          <div className="oferta">40% OFF</div>{" "}
          <AiFillHeart
            size={32}
            color={"white"}
            stroke={"#9F9F9F"}
            strokeWidth={"80"}
          />
        </label>
        {/* <img src={imagem} alt="imagem do produto" /> */}
      </div>
      <h5 className="card__nome">{nome}</h5>
      <s className="card__oferta">De R$ 96,69</s>
      <h3 className="card__preco">Por R$ {preco} </h3>
      <h4 className="card__promo">R$ {preco * 0.95}</h4>
      <p className="card__assinante">Para assinantes</p>
      <button className="bt__add">Adicionar</button>
    </div>
  );
}
export default Vitrine;
