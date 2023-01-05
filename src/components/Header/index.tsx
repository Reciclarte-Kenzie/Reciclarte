import React, { useContext, useState } from "react";
import logo from "../../assets/imgs/logo2.svg";
import {
  Header as Container,
  Content,
  Actions,
  LoginButton,
  RegisterButton,
} from "./styles";

import menu from "../../assets/imgs/menu.svg";
import home from "../../assets/imgs/home.svg";
import logout from "../../assets/imgs/logout.svg";
import { UserContext } from "../../providers/UserProvider";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const { user } = useContext(UserContext);

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Actions>
          {width < 640 ? (
            <img src={menu} alt="" />
          ) : (
            <>
              {user ? (
                <>
                  <button type="button" title="Pagina inicial">
                    <img src={home} alt="" />
                  </button>
                  <button type="button" title="Deslogar">
                    <img src={logout} alt="" />
                  </button>
                </>
              ) : (
                <>
                  <LoginButton type="button">Login</LoginButton>
                  <RegisterButton type="button">Register</RegisterButton>
                </>
              )}
            </>
          )}
        </Actions>
      </Content>
    </Container>
  );
};

export default Header;
