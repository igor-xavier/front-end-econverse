import midias from "./images/midias.png";
import cartoes from "./images/cartoes.png";
import logos from "./images/logos.png";
import encrypt from "./images/encrypt.png";
import { BsTelephone } from "react-icons/bs";
function Footer() {
  return (
    <div>
      <strong>Nos siga nas nossas redes sociais</strong>
      <img src={midias} alt="" />
      <strong>Sobre o Cãoselheiro</strong>
      <p>
        Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma
        empresa que nasceu para contribuir para uma melhor qualidade de vida dos
        cães e seus familiares humanos. Seus sócios são profissionais de
        educação canina que trabalham seguindo metodologias positivas de
        treinamento animal, encorajando e recompensando os acertos de nossos
        amigos em seus processos de adestramento. Aqui você encontrará apenas
        itens de qualidade comprovada e utilizados pessoalmente por seus
        idealizadores. Fique à vontade!
      </p>
      <div>
        <h6>ASSINATURA</h6>
        <h6>PARCEIROS</h6>
        <h6>INSTITUCIONAL</h6>
        <a>Quem somos</a>
        <a>Política de privacidade</a>
        <a>Política comercial</a>
        <a>Política de devolução</a>
        <a>Regras de frete</a>
        <h6>ATENDIMENTO</h6>
        <p>Fale conosco</p>
        <p>
          <BsTelephone />
          (11)97212-1314
        </p>
        <p>ocaoselheiro@ocaoselheiro.com</p>
        <a>Trabalhe conosco</a>

        <h6>FORMAS DE PAGAMENTO</h6>
        <img src={cartoes} alt="" />
        <h6>SEGURANÇA</h6>
        <img src={encrypt} alt="" />
      </div>
      <div>
        <p>O Cãoselheiro Comércio LTDA</p>
        <p>CNPJ: 30.324.633/0001-16</p>
        <p>© Todos os direitos reservados, 2021</p>
        <img src={logos} alt="" />
      </div>
    </div>
  );
}
export default Footer;
