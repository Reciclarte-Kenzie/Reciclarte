import Header from "../../components/Header";
import { Profile as Container } from "./styles";

import menu from "../../assets/imgs/menu.svg";
import home from "../../assets/imgs/home.svg";
import logout from "../../assets/imgs/logout.svg";
import { useState } from "react";

const Profile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <Container>
      <Header>
        {width < 640 ? (
          <img src={menu} alt="" />
        ) : (
          <>
            <button type="button" title="Pagina inicial">
              <img src={home} alt="" />
            </button>
            <button type="button" title="Deslogar">
              <img src={logout} alt="" />
            </button>
          </>
        )}
      </Header>
    </Container>
  );
};

export default Profile;
