import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/imgs/logoHeader.png";
import {
  Header as Container,
  Content,
  MainContent,
  Actions,
  LoginButton,
  RegisterButton,
} from "./styles";

import plusIcon from "../../assets/imgs/plus-solid.svg";
import openMenuIcon from "../../assets/imgs/menu.svg";
import closeMenuIcon from "../../assets/imgs/xmark-solid.svg";
import homeIcon from "../../assets/imgs/home.svg";
import profileIcon from "../../assets/imgs/user-solid.svg";
import logoutIcon from "../../assets/imgs/logout.svg";
import { iUserData, UserContext } from "../../providers/UserProvider";
import { useNavigate, useLocation } from "react-router";

const Header = () => {
  const { getSpecificUser, logout } = useContext(UserContext);
  const [user, setUser] = useState<iUserData | null>(null);
  const [showActions, setShowActions] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968);
  const location = useLocation();
  const navigate = useNavigate();

  const detectMobile = () => {
    setIsMobile(window.innerWidth < 968);
  };

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("@USERID");
      const response = await getSpecificUser(Number(userId));
      setUser(response?.data || ({} as iUserData));
    };

    getUser();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", detectMobile);

    return () => {
      window.removeEventListener("resize", detectMobile);
    };
  }, []);

  const logoutUser = () => {
    setUser(null);
    logout();
  };

  return (
    <Container>
      <Content>
        <MainContent>
          <img src={logo} alt="" />
          <div>
            {user && user.id ? (
              <button type="button" title="Adicionar Ideia">
                <img src={plusIcon} alt="" />
              </button>
            ) : (
              <></>
            )}
            <button
              type="button"
              title="Abrir Menu"
              onClick={() => setShowActions(!showActions)}
            >
              <img src={showActions ? closeMenuIcon : openMenuIcon} alt="" />
            </button>
          </div>
        </MainContent>
        <Actions toggle={isMobile ? showActions : true}>
          {user && user.id ? (
            <>
              {location.pathname !== "/profile" ? (
                <button
                  type="button"
                  title="Pagina de perfil"
                  onClick={() => navigate("/profile")}
                >
                  <img src={profileIcon} alt="" />
                </button>
              ) : (
                <button
                  type="button"
                  title="Pagina inicial"
                  onClick={() => navigate("/")}
                >
                  <img src={homeIcon} alt="" />
                </button>
              )}
              <button type="button" title="Deslogar" onClick={logoutUser}>
                <img src={logoutIcon} alt="" />
              </button>
            </>
          ) : (
            <>
              <LoginButton type="button" onClick={() => navigate("/login")}>
                Login
              </LoginButton>
              <RegisterButton
                type="button"
                onClick={() => navigate("/register")}
              >
                Register
              </RegisterButton>
            </>
          )}
        </Actions>
      </Content>
    </Container>
  );
};

export default Header;
