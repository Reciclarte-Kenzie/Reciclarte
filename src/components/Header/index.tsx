import React from "react";
import logo from "../../assets/imgs/logo2.svg";
import { Header as Container, Content, Actions } from "./styles";

interface IHeaderProps {
  children: JSX.Element | null;
}

const Header = ({ children }: IHeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <Actions>{children}</Actions>
      </Content>
    </Container>
  );
};

export default Header;
