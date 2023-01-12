import { DevCard } from "../../components/DevCards";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { DevelopersListStyled } from "./styles";

export const DevelopersPage = () => {
  const devs = [
    {
      avatar_url: "https://avatars.githubusercontent.com/u/78989471?v=4",
      bio: "Ser um dev é ser paciente e persistente na busca de novos conhecimentos.\r\n",
      blog: "https://www.linkedin.com/in/ana-carolina-cruz-957a42229/",
      company:
        "Estudante em formação de Desenvolvimento Web Full Stack na Kenzie Academy Brasil",
      html_url: "https://github.com/CarolinaOlivaCruz",
      location: "Ipojuca-PE",
      login: "CarolinaOlivaCruz",
      name: "Ana Carolina",
      position: "Quality Assurance",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/99164019?v=4",
      bio: "Programadora iniciante que atualmente se aventura a aprender java, desenvolvimento web e a como tirar pelos de gato da roupa.",
      blog: "https://www.linkedin.com/in/danielle-da-luz-nascimento/",
      company: "",
      html_url: "https://github.com/Danielle-Luz",
      location: "Bahia",
      login: "Danielle-Luz",
      name: "Danielle da Luz",
      position: "Tech Lead",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/108496850?v=4",
      bio: "Still learning",
      blog: "https://www.linkedin.com/in/luisnunesdev/",
      company: "",
      html_url: "https://github.com/CToH10",
      location: "",
      login: "CToH10",
      name: "Luís Nunes",
      position: "Product Owner",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/109801407?v=4",
      bio: "Desenvolvedor Web FullStack em formação na Kenzie Academy Brasil TypeScript | React | Javascript6 | HTML5 | CSS3",
      blog: "https://www.linkedin.com/in/oliviofreitas/",
      company: "",
      html_url: "https://github.com/freitassneto",
      location: "João Pessoa - PB",
      login: "freitassneto",
      name: "Olívio Freitas Neto",
      position: "Scrum Master",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/109983481?v=4",
      bio: "",
      blog: "https://www.linkedin.com/in/thiago-bettin-ramos-91b878238/",
      company: "",
      html_url: "https://github.com/ThiagoBettinRamos",
      location: "",
      login: "ThiagoBettinRamos",
      name: "Thiago Bettin",
      position: "Quality Assurance",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/1772190?v=4",
      bio: "",
      blog: "https://www.linkedin.com/in/tulio-albuquerque/",
      company: "",
      html_url: "https://github.com/tulio-albuquerque",
      location: "",
      login: "tulio-albuquerque",
      name: "Tulio Albuquerque",
      position: "Quality Assurance",
    },
  ];

  return (
    <>
      <Header />
      <DevelopersListStyled>
        {devs.map((dev) => (
          <DevCard dev={dev} key={dev.login} />
        ))}
      </DevelopersListStyled>
      <Footer />
    </>
  );
};
