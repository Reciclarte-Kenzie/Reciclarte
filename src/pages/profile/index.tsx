import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import ProjectCard from "../../components/ProjectCard";
import { iIdeaData } from "../../providers/IdeasProvider";
import { UserContext } from "../../providers/UserProvider";
import { Profile as Container } from "./styles";

const Profile = () => {
  const { user, getSpecificUserIdea } = useContext(UserContext);
  const [ideas, setIdeas] = useState<iIdeaData[]>();

  useEffect(() => {
    const getIdeas = async () => {
      console.log(user);
      if (user) {
        const response = await getSpecificUserIdea(user.id);
        console.log(response);
        setIdeas(response?.data.ideas);
      }
    };

    getIdeas();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <ProfileCard />
        <section>
          <h1>Suas ideias</h1>
          <ul>
            {ideas ? (
              <>
                {ideas.map((idea) => (
                  <ProjectCard
                    img="https://via.placeholder.com/291x133"
                    title="Itens decorativos feitos com palito..."
                    description="Porta retrato e apoio feitos com palito de picolé..."
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </ul>
        </section>
      </main>
    </Container>
  );
};

export default Profile;
