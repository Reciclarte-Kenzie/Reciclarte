import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import ProjectCard from "../../components/ProjectCard";
import { Profile as Container } from "./styles";

const Profile = () => {
  return (
    <Container>
      <Header />
      <main>
        <ProfileCard />
        <section>
          <h1>Suas ideias</h1>
          <ul>
            <ProjectCard
              img="https://via.placeholder.com/291x133"
              title="Itens decorativos feitos com palito..."
              description="Porta retrato e apoio feitos com palito de picolé..."
            />
            <ProjectCard
              img="https://via.placeholder.com/291x133"
              title="Itens decorativos feitos com palito..."
              description="Porta retrato e apoio feitos com palito de picolé..."
            />
            <ProjectCard
              img="https://via.placeholder.com/291x133"
              title="Itens decorativos feitos com palito..."
              description="Porta retrato e apoio feitos com palito de picolé..."
            />
          </ul>
        </section>
      </main>
    </Container>
  );
};

export default Profile;
