import inscreverImg from "./images/inscreverImg.png";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

function Inscrever() {
  return (
    <>
      <img src={inscreverImg} alt="" />
      <div>
        <strong>Se inscreva para receber novidades e promoções</strong>
        <input type="text" placeholder="Digite seu nome" />
        <AiOutlineUser />
        <input type="email" placeholder="Digite seu e-mail" />
        <AiOutlineMail />
        <button>ENVIAR</button>
      </div>
    </>
  );
}
export default Inscrever;
