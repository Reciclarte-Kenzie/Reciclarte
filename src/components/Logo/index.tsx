import { useNavigate } from "react-router-dom";
import blackNameLogo from "../../assets/imgs/blackNameLogo.svg";
import { StyledLogo } from "./styles";

export const BlackNameLogo = () => {
  const navigate = useNavigate();
  return (
    <StyledLogo onClick={() => navigate("/")}>
      <img src={blackNameLogo} alt="Reciclarte" />
      <figcaption>Reciclarte</figcaption>
    </StyledLogo>
  );
};
