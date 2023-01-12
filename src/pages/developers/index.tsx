import { DevCard } from "../../components/DevCards";
import { Footer } from "../../components/Footer";
import { devsData } from "./devsData";
import { DevelopersListStyled } from "./styles";
import Header from "../../components/Header";

export const DevelopersPage = () => {
  return (
    <>
      <Header />
      <DevelopersListStyled>
        {devsData.map((dev, index) => (
          <DevCard dev={dev} key={index} />
        ))}
      </DevelopersListStyled>
      <Footer />
    </>
  );
};
