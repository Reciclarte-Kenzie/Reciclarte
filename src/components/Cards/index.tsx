import { StyleCards } from "./styles";
import imgTest from "../../assets/imgs/img-teste.png";

export const Cards = () => {
  return (
    <StyleCards>
      <li>
        <img src={imgTest} alt="ideia" />
        <div>
          <h3>Itens decorativos feitos com palito Porta retrato e apoio feitos com palito de picolé </h3>
          <p>Porta retrato e apoio feitos com palito de picolé Porta retrato e apoio feitos com palito de picolé </p>
          <div>
            <button>Ver ideia</button>
            <button>Excluir ideia</button>
          </div>
        </div>
      </li>
      <li>
        <img src={imgTest} alt="ideia" />
        <div>
          <h3>Itens decorativos feitos com palito Porta retrato e apoio feitos com palito de picolé </h3>
          <p>Porta retrato e apoio feitos com palito de picolé Porta retrato e apoio feitos com palito de picolé</p>
          <div>
            <button>Ver ideia</button>
            <button>Excluir ideia</button>
          </div>
        </div>
      </li>
    </StyleCards>
  );
};
