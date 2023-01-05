import { StyledHome } from "./styles";
import { Cards } from "../../components/Cards";

export const Home = () => {
  return (
    <StyledHome>
      <header>
        <div>
          <img src="" alt="Logo" />
          <div>
            <button>
              <img src="" alt="pesquisar" />
            </button>
            <button>
              <img src="" alt="menu" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <section>
          <Cards />
        </section>
      </main>
    </StyledHome>
  );
};
