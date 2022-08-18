import "./styles.css";
import midias from "./images/midias.png";
import cartoes from "./images/cartoes.png";
import logos from "./images/logos.png";
import encrypt from "./images/encrypt.png";
import { BsTelephone } from "react-icons/bs";
function Footer() {
  return (
    <footer className="footer__page">
      <div className="footer__esq">
        <strong className="midias">Nos siga nas nossas redes sociais</strong>
        <img src={midias} alt="" className="midias__img" />
        <strong className="midias">Sobre o Cãoselheiro</strong>
        <p className="sobre__texto">
          Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma
          empresa que nasceu para contribuir para uma melhor qualidade de vida
          dos cães e seus familiares humanos. Seus sócios são profissionais de
          educação canina que trabalham seguindo metodologias positivas de
          treinamento animal, encorajando e recompensando os acertos de nossos
          amigos em seus processos de adestramento. Aqui você encontrará apenas
          itens de qualidade comprovada e utilizados pessoalmente por seus
          idealizadores. Fique à vontade!
        </p>
      </div>

      <div className="footer__dir">
        <div className="footer__coluna">
          <h6 className="midias">ASSINATURA</h6>
          <h6 className="midias">PARCEIROS</h6>
        </div>
        <div className="footer__coluna">
          <h6 className="midias">INSTITUCIONAL</h6>
          <a className="texto">Quem somos</a>
          <a className="texto">Política de privacidade</a>
          <a className="texto">Política comercial</a>
          <a className="texto">Política de devolução</a>
          <a className="texto">Regras de frete</a>
        </div>
        <div className="footer__coluna">
          <h6 className="midias">ATENDIMENTO</h6>
          <p className="texto">Fale conosco</p>
          <p className="texto">
            <BsTelephone />
            (11)97212-1314
          </p>
          <p className="texto">ocaoselheiro@ocaoselheiro.com</p>
          <p className="texto">Trabalhe conosco</p>
        </div>
        <div className="footer__line">
          <div className="footer__coluna"></div>
          <div className="footer__bot">
            <h6 className="midias imgCartoes">FORMAS DE PAGAMENTO</h6>
            <img
              src={cartoes}
              alt=""
              width={"229"}
              height={"85"}
              className="imgCartoes"
            />
          </div>
          <div className="footer__seg">
            <h6 className="midias seg">SEGURANÇA</h6>
            <img
              src={encrypt}
              alt=""
              width={"84"}
              height={"70"}
              className="imgSeg"
            />
          </div>
        </div>
        <div className="rodape__box">
          <p className="rodape">
            O Cãoselheiro Comércio LTDA CNPJ: 30.324.633/0001-16 © Todos os
            direitos reservados. 2021
          </p>
          <img
            src={logos}
            alt=""
            width={"226"}
            height={"32"}
            className="imgSeg"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
