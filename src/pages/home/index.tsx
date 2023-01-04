import { StyledHome } from "./styles";
import logo from "../../assets/imgs/logo2.svg";
import iconSearch from "../../assets/imgs/search.svg";
import iconMenu from "../../assets/imgs/menu.svg";

export const Home = () => {
  return (
    <StyledHome>
      <header>
        <div>
          <img src={logo} alt="Logo" />
          <div>
            <button>
              <img src={iconSearch} alt="pesquisar" />
            </button>
            <button>
              <img src={iconMenu} alt="menu" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <section>
          <ul>
            <li>
              <img src="" alt="ideia" />
              <div>
                <h3>Title</h3>
                <p>pppppppp</p>
                <span>pppppppp</span>
              </div>
            </li>
            <li>
              <img src="" alt="ideia" />
              <div>
                <h3>Title</h3>
                <p>pppppppp</p>
                <span>pppppppp</span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </StyledHome>
  );
};
