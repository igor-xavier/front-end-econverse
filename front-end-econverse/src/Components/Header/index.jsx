import logo from "./images/logo.svg";
import "./styles.css";
import { BiCheckShield } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import {
  AiOutlineCreditCard,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineInbox,
} from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { TbCrown } from "react-icons/tb";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <span>
          <BiCheckShield className="icon" size={20} /> Compra
          <span className="laranja"> 100% segura</span>
        </span>
        <span>
          <FiTruck className="icon" size={20} />
          <span className="laranja"> Frete grátis</span> acima de R$ 200
        </span>
        <span>
          <AiOutlineCreditCard className="icon" size={20} />
          <span className="laranja">Parcele</span> suas compras
        </span>
      </div>
      <div className="header__mid icon">
        <img src={logo} alt="logotipo da loja" />
        <div className="header__search">
          <input placeholder="O que você está buscando?" />
          <AiOutlineSearch size={28} className="icon__hover" />
        </div>
        <AiOutlineInbox className="icon__hover" size={32} />
        <AiOutlineHeart className="icon__hover" size={32} />
        <AiOutlineUser className="icon__hover" size={32} />
        <BsCart3 className="icon__hover" size={32} />
      </div>
      <nav className="header__nav">
        <a>BRINCAR</a>
        <a>MORDER</a>
        <a>COMER</a>
        <a>PASSEAR</a>
        <a>CASA E CONFORTO</a>
        <a>EDUCAÇÃO</a>
        <a>OFERTAS</a>
        <a>
          <TbCrown size={20} className="icon" />
          COLEÇÃO DE OUTONO
        </a>
      </nav>
    </div>
  );
}
export default Header;
