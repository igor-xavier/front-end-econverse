import "./styles.css";
import inscreverImg from "./images/inscreverImg.png";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

function Inscrever() {
  return (
    <div className="inscrever__div">
      <div className="inscrever">
        <img src={inscreverImg} alt="" className="inscrever__img" />
        <div className="inscrever__box">
          <strong className="inscrever__titulo">
            Se inscreva para receber novidades e promoções
          </strong>
          <div className="nome-email">
            <AiOutlineUser size={28} className="icon" />
            <input
              type="text"
              placeholder="Digite seu nome"
              className="inscrever__input"
            />
          </div>
          <div className="nome-email">
            <AiOutlineMail size={28} className="icon" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="inscrever__input"
            />
          </div>
          <button className="bt insc">ENVIAR</button>
        </div>
      </div>
    </div>
  );
}
export default Inscrever;
