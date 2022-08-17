import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductsList from "./Components/Produtos/";
import Vitrine from "./Components/Vitrine";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Categorias from "./Components/Categorias";
import Marcas from "./Components/Marcas";
import Parceiros from "./Components/Parceiros";
import Blog from "./Components/Blog";
import Assinatura from "./Components/Assinatura";
import Instagram from "./Components/Instagram";
import Inscrever from "./Components/Inscrever";
import Footer from "./Components/Footer";

function App() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json"
      )
      .then((response) => setProdutos(response.data.products))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Categorias />
      <ProductsList produtos={produtos} Vitrine={Vitrine} />
      <Marcas />
      <div className="divisao">
        <Parceiros />
        <Assinatura />
      </div>
      <Blog />
      <Instagram />
      <Inscrever />
      <Footer />
    </div>
  );
}

export default App;
