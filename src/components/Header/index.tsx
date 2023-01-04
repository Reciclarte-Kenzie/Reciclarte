import logo from "../../assets/imgs/logo2.svg";
import menu from "../../assets/imgs/menu.svg";
import { Header as Container, Content } from "./styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <img src={menu} alt="" />
      </Content>
    </Container>
  );
};

export default Header;
