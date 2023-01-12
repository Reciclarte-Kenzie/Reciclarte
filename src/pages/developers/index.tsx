import { DevCard } from "../../components/DevCards";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { DevelopersListStyled } from "./styles";

export const DevelopersPage = () => {
  const devs = [
    {
      avatar_url: "https://avatars.githubusercontent.com/u/78989471?v=4",
      blog: "https://www.linkedin.com/in/ana-carolina-cruz-957a42229/",
      html_url: "https://github.com/CarolinaOlivaCruz",
      name: "Ana Carolina",
      position: "Quality Assurance",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/99164019?v=4",
      blog: "https://www.linkedin.com/in/danielle-da-luz-nascimento/",
      html_url: "https://github.com/Danielle-Luz",
      name: "Danielle da Luz",
      position: "Tech Lead",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/108496850?v=4",
      blog: "https://www.linkedin.com/in/luisnunesdev/",
      html_url: "https://github.com/CToH10",
      name: "Luís Nunes",
      position: "Product Owner",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/109801407?v=4",
      blog: "https://www.linkedin.com/in/oliviofreitas/",
      html_url: "https://github.com/freitassneto",
      name: "Olívio Freitas Neto",
      position: "Scrum Master",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/109983481?v=4",
      blog: "https://www.linkedin.com/in/thiago-bettin-ramos-91b878238/",
      html_url: "https://github.com/ThiagoBettinRamos",
      name: "Thiago Bettin",
      position: "Quality Assurance",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/1772190?v=4",
      blog: "https://www.linkedin.com/in/tulio-albuquerque/",
      html_url: "https://github.com/tulio-albuquerque",
      name: "Tulio Albuquerque",
      position: "Quality Assurance",
    },
  ];

  return (
    <>
      <Header />
      <DevelopersListStyled>
        {devs.map((dev, index) => (
          <DevCard dev={dev} key={index} />
        ))}
      </DevelopersListStyled>
      <Footer />
    </>
  );
};
